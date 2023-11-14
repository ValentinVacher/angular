import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./pages/auth/signin/signin.component";
import {ErrorComponent} from "./pages/error/error.component";
import {authGuard} from "./guards/auth/auth.guard";
import {ListMonsterComponent} from "./pages/monsters/list-monster/list-monster.component";
import {DetailsMonsterComponent} from "./pages/monsters/details-monster/details-monster.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'monsters'},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'monsters', /*canActivate: [authGuard],*/ children: [
      {path: '', component: ListMonsterComponent},
      {path: ':id', component: DetailsMonsterComponent}
    ]},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
