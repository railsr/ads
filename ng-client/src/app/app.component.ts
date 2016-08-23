import { Component } from '@angular/core';
import { AdsComponent } from './ads/ads.component';
import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
