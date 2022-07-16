import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './category.component';
import { CategoriesService } from './category/categories.service';
import { CategoryComponent } from './category/category.component';


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
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
