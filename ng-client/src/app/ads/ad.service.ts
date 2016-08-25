import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdService {
  private _url = 'http://localhost:3000/ads'

  constructor(private _http: Http) {

  }

  getAds() {
    return this._http.get(this._url).map(res => res.json());
  }

  getAd(id) {
    return this._http.get(this._url + '/' + id).map(res => res.json());
  }
}
