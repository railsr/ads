import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'login',
  template: `

    <form (ngSubmit)="f.form.valid && login()" #f="ngForm" class="wellc" >
        <h3>Login</h3>
        <div class="form-group" >
          <label>Email</label>
          <input type="text" class="form-control" name="email" [(ngModel)]="model.email" #email="ngModel">
        </div>
        <div class="form-group" >
          <label>Password</label>
          <input type="text" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel">
        </div>
        {{model | json}}

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
})

export class LoginComponent implements OnInit {
  model: any = {};
  error = '';

  constructor(private router: Router, private authenticationService: AuthenticationService){

  }

  ngOnInit() {
    this.model.email = 'user@example.com'
    this.model.password = 'user12345'
  }

  login(){
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(res => {
        if (res == true){
          console.log("logged in");
        }else{
          console.log(res);
          this.error = "email or password is invalid";
        }
      })
  }

  is_logged_in(){
    let token = localStorage.getItem('access_token');
    return (token != null) ? true : false
  }

}
