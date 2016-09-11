import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'register',
  template: `

    <form (ngSubmit)="f.form.valid && register()" #f="ngForm" class="wellc" >
        <h3>Register</h3>
        <div class="form-group" >
          <label>Email</label>
          <input type="text" class="form-control" name="email"  [(ngModel)]="model.email" #email="ngModel">
        </div>
        <div class="form-group" >
          <label>Password</label>
          <input type="text" class="form-control" name="password"  [(ngModel)]="model.password" #password="ngModel">
        </div>
        {{model | json}}

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>


  `
})

export class RegistrationComponent implements OnInit {
  model: any = {};
  error = '';
  constructor(private router: Router, private authenticationService: AuthenticationService){

  }

  ngOnInit() {
    this.model.email = ''
    this.model.password = ''
  }

}
