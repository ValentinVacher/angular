import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { DetailsMonsterComponent } from './pages/monsters/details-monster/details-monster.component';
import { ListMonsterComponent } from './pages/monsters/list-monster/list-monster.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormErrorsComponent } from './components/form-errors/form-errors/form-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SigninComponent,
    DetailsMonsterComponent,
    ListMonsterComponent,
    HeaderComponent,
    FormErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
