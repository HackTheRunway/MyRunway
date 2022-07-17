import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  searchTerm: string = '';
  wearable_types: string[] = [
    'Hats',
    'Tops',
    'Bottoms',
    'Shoes',
    'Accessories',
  ];

  filtered_wearables: { base64String: string; tag: string; }[] = [];

  search(query: string) {
    this.searchTerm=query;
    
    switch (query) {
      case 'Hats':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Hat'
        );
        console.log(this.filtered_wearables)
        break;
      case 'Shoes':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Shoes'
        );
        break;
      case 'Tops':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Top'
        );
        break;
      case 'Bottoms':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Bottom'
        );
        break;
      case 'Accessories':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Accessory'
        );
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
