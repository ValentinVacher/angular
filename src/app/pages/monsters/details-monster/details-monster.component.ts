import {Component, OnInit} from '@angular/core';
import {Monster} from "../../../models/monster.model";
import {MonsterService} from "../../../services/monster/monster.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-details-monster',
  templateUrl: './details-monster.component.html',
  styleUrls: ['./details-monster.component.css']
})
export class DetailsMonsterComponent implements OnInit{
  monster$?: Promise<Monster>
  monsterExist = false
  fakArray = new Array(5)
  iconStar = faStar

  constructor(private monsterService: MonsterService, private  router: Router, private route: ActivatedRoute) {
  }

  //initialize monster$
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')

    if (id){
      this.monster$ = this.monsterService.getById(parseInt(id))
      this.monster$
        .then(() => this.monsterExist = true)
        .catch(() => this.router.navigateByUrl('/not-found'))
    }else {
      this.router.navigateByUrl('/not-found')
    }
  }
}
