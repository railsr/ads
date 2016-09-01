import { RouterModule, Routes } from '@angular/router';

import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ads/ad-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'ads/:id', component: AdDetailsComponent },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
