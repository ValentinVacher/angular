import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  if(Boolean(inject(AuthService).getToken())) return true;

  return inject(Router).navigateByUrl('/auth/signin')
};
