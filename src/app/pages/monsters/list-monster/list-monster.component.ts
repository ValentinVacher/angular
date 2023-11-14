import {Component, OnInit} from '@angular/core';
import {MonsterService} from "../../../services/monster/monster.service";

@Component({
  selector: 'app-list-monster',
  templateUrl: './list-monster.component.html',
  styleUrls: ['./list-monster.component.css']
})
export class ListMonsterComponent implements OnInit{
  constructor(private monsterService: MonsterService) {
  }

  ngOnInit() {
    this.monsterService.getAll()
  }
}
