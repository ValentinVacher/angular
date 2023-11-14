import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment.development";
import {firstValueFrom, map} from "rxjs";
import {Monster, MonsterHttp} from "../../models/monster.model";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private fullBaseUrlApi

  constructor(private http: HttpClient, private authService: AuthService) {
    this.fullBaseUrlApi = environment.API_URL + 'monsters'
  }

  getAll() {
    return firstValueFrom(this.http
      .get<MonsterHttp[]>(this.fullBaseUrlApi)
      .pipe(map(monstersHttp => monstersHttp.map(monsterHttp =>  console.log(Monster.mapperMonsterHttpToMonster(monsterHttp))))))
  }
}
