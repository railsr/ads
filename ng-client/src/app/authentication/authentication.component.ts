import { Component } from "@angular/core";
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@Component({
  template: `
  <div class="row">
    <div class="col-md-6">
      <login></login>
    </div>
    <div class="col-md-6">

    </div>
  </div>
  `,
  directives: [LoginComponent, RegistrationComponent]
})

export class AuthenticationComponent {

}
