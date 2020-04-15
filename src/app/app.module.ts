import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutCanadaComponent } from './about-canada/about-canada.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CanadaService } from '../app/services/canada.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AboutCanadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [CanadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
