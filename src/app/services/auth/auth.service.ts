import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";
import {environment} from "../../../environments/environment.development";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private internalToken$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined)
  token$: Observable<string|undefined> = this.internalToken$.asObservable()

  constructor(private localStorageManagerService: LocalStorageManagerService) {
    const token = this.localStorageManagerService.getData(environment.LOCAL_STORAGE.TOKEN)
    this.internalToken$.next(token)
  }

  getToken(){
    return this.internalToken$.value
  }

  signIn(email: string, password: string, keepConnection: boolean): Promise<void | undefined> {
    return new Promise((resolve, reject) => {
      if (email === 'admin@admin.fr' && password === 'P@ssw0rd2023') {
        if (keepConnection) {
          this.localStorageManagerService.saveData(
            environment.LOCAL_STORAGE.TOKEN,
            'Sonny.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SECRETJWTTOKEN'
          );
        }
        this.internalToken$.next(
          'Sonny.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SECRETJWTTOKEN'
        );
        resolve();
      } else {
        reject(Error('Identifiants incorrect !'));
      }
    });
  }

  signOut() {
    this.internalToken$.next(undefined)
    this.localStorageManagerService.removeData(environment.LOCAL_STORAGE.TOKEN)
  }

}
