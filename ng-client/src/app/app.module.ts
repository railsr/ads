import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AdsComponent } from './ads/ads.component';
import { AdComponent } from './ads/ad.component';
import { AdService } from './ads/ad.service';
import { MdPipe } from './ads/md.pipe';
import { ApiService } from './shared';
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
    AdsComponent,
    AdComponent,
    MdPipe
  ],
  providers: [
    ApiService, AdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
