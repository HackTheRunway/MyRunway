import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamInitError, WebcamModule } from 'ngx-webcam';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WardrobecamComponent } from './wardrobecam/wardrobecam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WardrobecamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
