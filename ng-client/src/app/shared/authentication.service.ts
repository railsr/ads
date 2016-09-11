import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {  RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public access_token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.access_token = currentUser && currentUser.access_token;
  }

  login(email, password): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/auth',
     JSON.stringify({email: email, password: password}), options)
      .map((response: Response) => {
        let access_token = response.json() && response.json().access_token;
        console.log(response.json());
        if (access_token) {
          this.access_token = access_token;
          localStorage.setItem('access_token', JSON.stringify(access_token));
          return true;
        }else{
          return false;
        }
      });
  }
  logout(): void {
      this.access_token = null;
      localStorage.removeItem('access_token');
  }
}
