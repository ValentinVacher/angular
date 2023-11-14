import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {faHouse, faUser} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  iconeHome = faHouse
  iconLogout = faUser

  isConnected$?: Observable<boolean>

  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit() {
    this.isConnected$ = this.authService.token$.pipe(map((token:string|undefined) => Boolean(token)))
  }

  onClickSignOut(){
    this.authService.signOut()
    this.router.navigateByUrl('/auth/signin')
  }
}
