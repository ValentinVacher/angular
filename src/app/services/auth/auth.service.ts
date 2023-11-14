import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected = false

  constructor() { }

  signIn(email: string, password: string, keepConnection: boolean){
    console.log(email, password)

    if(email === 'admin@admin.fr' && password === 'P@ssw0rd2023'){
      this.isConnected = true

      return true
    }

    return false
  }

  signOut(){
    this.isConnected = false
  }
}
