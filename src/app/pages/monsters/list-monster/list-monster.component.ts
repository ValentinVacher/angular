import {Component, OnInit} from '@angular/core';
import {MonsterService} from "../../../services/monster/monster.service";
import {Monster, MonsterForm} from "../../../models/monster.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Type = Monster.Type;
import Species = Monster.Species;

@Component({
  selector: 'app-list-monster',
  templateUrl: './list-monster.component.html',
  styleUrls: ['./list-monster.component.css']
})
export class ListMonsterComponent implements OnInit{
  monsters$?: Promise<Monster[]>
  monsterExist = false
  selectedMonsterDeleteConfirmation?: Monster
  showDeleteSuccessToast: boolean = false
  selectedMonsterForEdition?: Monster
  monsterForm?: FormGroup
  types = Type
  speciesList = Species

  constructor(private monsterService: MonsterService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  //init monsters$
  ngOnInit() {
    this.monsters$ = this.monsterService.getAll()
    this.monsters$.then(() => this.monsterExist = true)
  }

  //add a monster
  onClickAddMonster(modalMonsterForm: any): void {
    this.initMonsterForm()
    const modal = this.modalService.open(modalMonsterForm)

    modal.result.then(() => {
      const monsterForm: MonsterForm = {
        ...this.monsterForm?.value,
      }

      this.monsterService.add(monsterForm).then(monsterToAdd => {
        this.monsters$ = this.monsterService.getAll()
        console.log(monsterToAdd)
      })
    }).catch(() => {
    })
  }


  //edit a monster
  onClickEditMonster(modalMonsterForm: any, MonsterToEdit: Monster){
    this.initMonsterForm(MonsterToEdit)
    this.selectedMonsterForEdition = MonsterToEdit
    const modal = this.modalService.open(modalMonsterForm)

    modal.result.then(() => {
      const monsterForm: MonsterForm = {
        ...this.monsterForm?.value
      }

      this.monsterService.edite(MonsterToEdit.id, monsterForm).then(monster => {
        this.monsters$ = this.monsterService.getAll()
        this.selectedMonsterForEdition = undefined
        console.log(monster)
      })
    }).catch(() => {
      this.selectedMonsterForEdition = undefined
    })

  }


  //delete a monster
  onClickDelete(modalDeleteUser: any, monster: Monster) {
    this.selectedMonsterDeleteConfirmation = monster

    const modal = this.modalService.open(modalDeleteUser)
    modal.result
      .then(() => {
        const deletedMonster = this.monsterService.deleteById(monster.id)
        deletedMonster.then(monster => {
          this.monsters$ = this.monsterService.getAll()
          console.log(monster)
        })
        this.showDeleteSuccessToast = true
      })
      .catch(() => {
      })
  }

  //close modal
  onSubmitMonsterForm(modal: any) {
    if (this.monsterForm?.valid)
      modal.close()
  }

  //init monsterForm
  private initMonsterForm(monsterToEdit?: Monster): void {
    this.monsterForm = this.fb.group({
      name: [monsterToEdit ? monsterToEdit.name : undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: [monsterToEdit ? monsterToEdit.description : undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      type: [monsterToEdit ? monsterToEdit.type : Type.LARGE, [Validators.required]],
      species: [monsterToEdit ? monsterToEdit.species : Species.BIRD_WYVERN, [Validators.required]]
    })
  }

}
