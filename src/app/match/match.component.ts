import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import Wearable from '../models/wearable';
import { WearableCategory } from '../models/wearable-category';
import data from '../../assets/storage.json';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  searchTerm: string = '';
  wearable_types = [WearableCategory.TOP, WearableCategory.BOTTOM, WearableCategory.SOCKS, WearableCategory.SHOES, WearableCategory.ACCESSORY, WearableCategory.HAT];

  wearables = data.clothes;
  //wearables: Wearable[] = [];
  service: DataStorageService;
  filtered_wearables: { image: string, category: string }[] = [];


  constructor(service: DataStorageService) {
    this.service = service;
/*     service.getWearablesAsync().then((wearables) => {
      this.wearables = wearables;
      this.filtered_wearables = wearables;
    }); */

    this.wearables = data.clothes;
    this.filtered_wearables=this.wearables;
    console.log(this.wearables.length);
  }

  search(query: string) {
    this.searchTerm = query;
    console.log(query)
    switch (query) {
      case 'hat':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.category === WearableCategory.HAT
        );
        console.log(this.filtered_wearables)
        break;
      case 'shoes':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.category === WearableCategory.SHOES
        );
        break;
      case 'top':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.category === WearableCategory.TOP
        );
        break;
      case 'bottom':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.category === WearableCategory.BOTTOM
        );
        break;
      case 'accessory':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.category === WearableCategory.ACCESSORY
        );
        break;
      default:
        this.filtered_wearables = this.wearables;
        break;
    }
  }

  goHome() {
    location.href = ''
  }

  handleClick(event: any) {
    let chosenCat = event.category;
    let chosenImg = event.image;
    
    console.log(chosenCat);
    console.log(chosenImg);

    let item = document.getElementById(chosenCat);
    if (item) {
      console.log("item found")
      let src = item.getAttribute("src");
      src = chosenImg;
    }
    ;
  } 

  ngOnInit(): void {}

}
