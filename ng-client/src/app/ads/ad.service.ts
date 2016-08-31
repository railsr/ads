import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AdService {
  private _url = 'http://localhost:3000/ads';


  constructor(private _http: Http) {

  }

  getAds() {
    return this._http.get(this._url).map(res => res.json());
  }

  getAd(id) {
    return this._http.get(this._url + '/' + id).map(res => res.json());
  }

  postAd(ad){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._url, JSON.stringify(ad), options).map(res => res.json());
  }
}
