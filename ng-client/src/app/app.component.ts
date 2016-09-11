import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';
import { LoginComponent } from './authentication/login.component';
import '../style/app.scss';

@Component({
  selector: 'my-app',
  template: `
  <div class="ui small menu">
    <a class="item" [routerLink]="['']">Home</a>
    <a class="item" [routerLink]="['about']">About</a>
    <a class="item" *ngIf="!login.is_logged_in()" [routerLink]="['authentication']">(Login / Register)</a>
    <a class="item" *ngIf="login.is_logged_in()" (click)="logout()">(Logout)</a>
  </div>

  <div class="container-fluid">
    <router-outlet></router-outlet>
  </div>
  `,
  providers: [LoginComponent]
})

export class AppComponent {
  constructor(private router: Router, private authenticationService: AuthenticationService, private login: LoginComponent) {

  }

  logout(){
    this.authenticationService.logout();
  }
}
