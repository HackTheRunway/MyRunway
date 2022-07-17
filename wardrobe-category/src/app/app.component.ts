import { Component } from '@angular/core';

export interface Category {
  type: string;
  typeValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wardrobe-category';

  categories: Category[] = [
    { type: 'Category1', typeValue: 'Hat' },
    { type: 'Category2', typeValue: 'Top' },
    { type: 'Category3', typeValue: 'Bottom' },
    { type: 'Category4', typeValue: 'Shoes' },
    { type: 'Category5', typeValue: 'Accessories' },
    { type: 'Category6', typeValue: 'Socks' }
  ]

  // public dataFields: Object = {text: 'Category', value: 'Id'};

  // public localData: Object[] = [
  //   { Id: 'Category1', Category: 'Hat' },
  //   { Id: 'Category2', Category: 'Top' },
  //   { Id: 'Category3', Category: 'Bottom' },
  //   { Id: 'Category4', Category: 'Shoes' },
  //   { Id: 'Category5', Category: 'Accessories' },
  //   { Id: 'Category6', Category: 'Socks' }
  // ];
}
