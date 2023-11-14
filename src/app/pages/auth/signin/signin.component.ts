import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  isValid = false

  constructor(private authService: AuthService, private  router: Router) {
  }

  onSubmitSignIn(form: NgForm) {
    if (form.valid) {
      const {email, password, keepConnection} = form.value

      if(this.authService.signIn(email, password, keepConnection)){
        this.router.navigateByUrl('monsters')
      } else {
        this.isValid = true
      }
    }
  }
}
