import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  template: `
  <h1>{{ad.title}}</h1>
  <p>{{ad.description}}</p>
  `
})
export class AdDetailsComponent implements OnInit {
  ad = {};

  constructor(private _route: ActivatedRoute, private _adService: AdService) {

  }
  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    return this._adService.getAd(id).subscribe(res => {
      console.log(res);
      this.ad = res['data']['attributes'];
    });
  }
}
