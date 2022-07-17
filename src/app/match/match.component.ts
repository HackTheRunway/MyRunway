import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
//import { MatSelect } from '@angular/material/select';
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
  //wearables: Wearable[];
  service: DataStorageService;
  filtered_wearables: { image: string, category: string }[] = [];
  
  //filtered_wearables: Wearable[];

  constructor(service: DataStorageService) {
    this.service = service;
    //this.wearables = service.getWearables();
    //this.filtered_wearables = service.getWearables();
    this.filtered_wearables = this.wearables;
  }

 /*  @ViewChild('matSelect')
  matSelect: MatSelect = new MatSelect;

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(value => {
        console.log(value);
    });
}
 */
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

  public getWearableBtn() {
    console.log( this.service.getWearables())
  }

  ngOnInit(): void {}
}
