import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamInitError, WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WardrobecamComponent } from './wardrobecam/wardrobecam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DataStorageService } from './data-storage.service';
import { ViewWardrobeComponent } from './view-wardrobe/view-wardrobe.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, WardrobecamComponent, ViewWardrobeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
