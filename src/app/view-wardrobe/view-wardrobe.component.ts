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

  wearables: Wearable[] | undefined;
  service: DataStorageService;
  public wearableCategory = "";
  public wearableTitle = "";
  public isFieldsValidated = false;

  sampleData:any;
  textInput = '';
  displayValue: string = '';
  data: string = '';

  msg:string = '';

  constructor(service: DataStorageService) { 
    this.service = service;
    service.getWearablesAsync().then((wearables) => {
      this.wearables = wearables;
    });
  }

  ngOnInit(): void {
  }

  private fieldsValidated(): boolean {

      return this.wearableTitle.length > 0 && this.wearableCategory.length > 0;
  }

  modelChangeFn(value: any) {
    this.isFieldsValidated= this.fieldsValidated();
  }

  // ngOnInit() {
  //   this._jsonService.getData().subscribe((data) => {
  //     this.sampleData = data;
  //   });
  // }

  onClick(message: string) {
    //this.displayValue = this.textInput;
    //this.msg='Button is Clicked';
    
    message = message.toLowerCase();

    switch(message) {
      case "top":
        this.msg = "The category selected is Top.";
        break;
      case "bottom":
        this.msg = "The category selected is Bottom.";
        break;
      case "accessory":
        this.msg = "The category selected is Accessory.";
        break;
      case "hat":
        this.msg = "The category selected is Hat.";
        break;
      case "shoes":
        this.msg = "The category selected is Shoes.";
        break;
      case "socks":
        this.msg = "The category selected is Socks.";
        break;
      default:
        this.msg = "Sorry I do not know this category. Please select from the following available categories: 1.Top 2.Bottom 3.Accessory 4.Hat 5.Shoes 6.Socks"
        break;
    }

    // process to display images

    return this.msg;
  }
}
