import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { AdsComponent } from './ads/ads.component';
import { AdComponent } from './ads/ad.component';
import { AdService } from './ads/ad.service';
import { MdPipe } from './shared/pipes/md.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { AuthenticationService } from './shared/authentication.service';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthenticationComponent,
    AdsComponent,
    AdComponent,
    MdPipe,
    TruncatePipe
  ],
  providers: [
    AdService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
