import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { NewAdComponent } from './new-ad.component';

@Component({
  selector: 'ads',
  template: `
  <div class="row">
    <div class="col-md-5">
    <new-ad></new-ad>
    </div>

    <div class="col-md-7">
      <div *ngFor="let ad of ads" >
        <ad [data]="ad"></ad>
      </div>
    </div>
  `,
  directives: [NewAdComponent]
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
