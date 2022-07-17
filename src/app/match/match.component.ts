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
  images : {[key: string]: {image: string, category: string}} = {
    hat: {
      image: '../../assets/images/hat-icon.png',
      category: WearableCategory.HAT
    },
    top: {
      image: '../../assets/images/top-icon.jpg',
      category: WearableCategory.TOP
    },
    bottom: {
      image: '../../assets/images/bottom-icon.png',
      category: WearableCategory.BOTTOM
    },
    shoes: {
      image: '../../assets/images/shoes-icon.png',
      category: WearableCategory.SHOES
    },
    socks: {
      image: '../../assets/images/socks-icon.png',
      category: WearableCategory.SOCKS
    },
    accessory: {
      image: '../../assets/images/accessories-icon.png',
      category: WearableCategory.ACCESSORY
    }
  }


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
      case 'socks':
          this.filtered_wearables = this.wearables.filter((wearable) =>
            wearable.category === WearableCategory.SOCKS
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
    let chosenCat: string = event.category;
    let chosenImg = event.image;
    let item = document.getElementById(chosenCat);
    if (item) {
      this.images[chosenCat].image = chosenImg;
    }
    ;
  } 

  ngOnInit(): void {}

}
