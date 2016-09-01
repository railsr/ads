import { Component } from '@angular/core';
import { AdService } from './ad.service';
import { NewAdComponent } from './new-ad.component';
import {Ad} from './ad';

@Component({
  selector: 'ads',
  template: `

  <div class="row">
    <div class="col-md-5">
    <new-ad (createAd)="onCreateAd($event)"></new-ad>
    </div>

    <div class="col-md-7">
      <h3 *ngIf="(ads && ads.length == 0)" class="text-center">No ads yet</h3>

      <div *ngFor="let ad of ads" >
        <ad [data]="ad"></ad>
      </div>
    </div>
  </div>
  `,
  directives: [NewAdComponent]
})
export class AdsComponent {
  ads: Ad[];
  ad = new Ad();

  constructor(private _adService: AdService) {

  }

  ngOnInit() {
    return this._adService.getAds().subscribe(res => {
      console.log(res);
      this.ads = res['data'];
    });
  }

  onCreateAd(ad) {
    this.ads.unshift(ad['data']);
  }
}
