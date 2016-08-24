import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';

@Component({
  selector: 'ads',
  template: `
  <div *ngFor="let ad of ads" >
    <ad [data]="ad"></ad>
  </div>
  `
})
export class AdsComponent implements OnInit {
  ads: any[];

  constructor(private _adService: AdService) {

  }
  ngOnInit() {
    return this._adService.getAds().subscribe(res => {
      console.log(res);
      this.ads = res['data'];
    });
  }
}
