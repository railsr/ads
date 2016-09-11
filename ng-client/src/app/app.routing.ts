import { RouterModule, Routes } from '@angular/router';

import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ads/ad-details.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login.component';

const routes: Routes = [
  { path: '', component: AdsComponent },
  { path: 'ads/:id', component: AdDetailsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'logout', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
