import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  template: `
  <div class="row">
    <div class="col-md-12">
      <h1>{{ad.title}}</h1>
      <p [innerHTML] = "ad.description | md"></p>
    </div>
  </div>
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
