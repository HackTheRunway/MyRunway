import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './category.component';
import { CategoriesService } from './category/categories.service';
import { CategoryComponent } from './category/category.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DropDownListModule
    FormsModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
