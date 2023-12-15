import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment.development";
import {firstValueFrom, map} from "rxjs";
import {Monster, MonsterForm, MonsterHttp} from "../../models/monster.model";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private fullBaseUrlApi

  constructor(private http: HttpClient, private authService: AuthService) {
    this.fullBaseUrlApi = environment.API_URL + 'monsters'
  }

  getAll(): Promise<Monster[]> {
    return firstValueFrom(this.http
      .get<MonsterHttp[]>(this.fullBaseUrlApi)
      .pipe(map(monstersHttp => monstersHttp.map(monsterHttp => Monster.mapperMonsterHttpToMonster(monsterHttp)))))
  }

  getById(id: number): Promise<Monster> {
    return firstValueFrom((this.http
      .get<MonsterHttp>(`${this.fullBaseUrlApi}/${id}`)
      .pipe(map(monsterHttp => Monster.mapperMonsterHttpToMonster(monsterHttp)))))
  }

  add(monsterToAdd: MonsterForm): Promise<Monster> {
    return firstValueFrom(this.http
      .get<MonsterHttp[]>(this.fullBaseUrlApi)
      .pipe(map(monsterHttp => Monster.mapperRandomMonsterAndMonsterForm(monsterHttp, monsterToAdd))));
  }

  edite(id: number, monsterUpdate: MonsterForm): Promise<Monster> {
        return firstValueFrom((this.http
        .get<MonsterHttp>(`${this.fullBaseUrlApi}/${id}`)
        .pipe(map(monsterHttp => Monster.mapperMonterHttpAndMonsterForm(monsterHttp, monsterUpdate)))))
  }

  deleteById(id: number) {
    return this.getById(id)
  }
}
