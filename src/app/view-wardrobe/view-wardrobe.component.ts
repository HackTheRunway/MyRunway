import { Component, OnInit } from '@angular/core';
import { WearableCategory } from '../models/wearable-category';
import Wearable from '../models/wearable';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-view-wardrobe',
  templateUrl: './view-wardrobe.component.html',
  styleUrls: ['./view-wardrobe.component.scss']
})
export class ViewWardrobeComponent implements OnInit {
  wearableOptions = [WearableCategory.TOP, WearableCategory.BOTTOM, WearableCategory.SOCKS, WearableCategory.SHOES, WearableCategory.ACCESSORY, WearableCategory.HAT];

  wearables: Wearable[];
  service: DataStorageService;
  public wearableCategory = "";
  public wearableTitle = "";
  public isFieldsValidated = false;

  constructor(service: DataStorageService) { 
    this.service = service;
    this.wearables = service.getWearables();
  }

  ngOnInit(): void {
  }

  private fieldsValidated(): boolean {

      return this.wearableTitle.length > 0 && this.wearableCategory.length > 0;
  }

  modelChangeFn(value: any) {
    this.isFieldsValidated= this.fieldsValidated();
  }

}
