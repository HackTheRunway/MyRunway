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
  msg_fil:string = '';
  curCat:string = '';

  isTop: boolean = true;
  isBottom: boolean = true;
  isHat: boolean = true;
  isShoes: boolean = true;
  isSocks: boolean = true;
  isAccessory: boolean = true;

  constructor(service: DataStorageService) { 
    this.service = service;
    service.getWearablesAsync().then((wearables) => {
      this.wearables = wearables;
    });
  }

  goHome() {
    location.href = ''
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
        this.curCat = "Top";
        this.isTop = true;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "bottom":
        this.msg = "The category selected is Bottom.";
        this.curCat = "Bottom";
        this.isTop = false;
        this.isBottom = true;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "accessory":
        this.msg = "The category selected is Accessory.";
        this.curCat = "Accessory";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = true;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "hat":
        this.msg = "The category selected is Hat.";
        this.curCat = "Hat";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = true;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "shoes":
        this.msg = "The category selected is Shoes.";
        this.curCat = "Shoes";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = true;
        break;
      case "socks":
        this.msg = "The category selected is Socks.";
        this.curCat = "Socks";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = true;
        this.isShoes = false;
        break;
      default:
        this.msg = "Sorry I do not know this category. Please select from the following available categories: 1.Top 2.Bottom 3.Accessory 4.Hat 5.Shoes 6.Socks"
        break;
    }

    // process to display images

    return this.msg;
  }

  filterCat(message: string) {
    //this.displayValue = this.textInput;
    //this.msg='Button is Clicked';
    
    message = message.toLowerCase();

    switch(message) {
      case "top":
        this.msg_fil = "The category selected is Top.";
        this.curCat = "Top";
        this.isTop = true;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "bottom":
        this.msg_fil = "The category selected is Bottom.";
        this.curCat = "Bottom";
        this.isTop = false;
        this.isBottom = true;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "accessory":
        this.msg_fil = "The category selected is Accessory.";
        this.curCat = "Accessory";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = true;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "hat":
        this.msg_fil = "The category selected is Hat.";
        this.curCat = "Hat";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = true;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = false;
        break;
      case "shoes":
        this.msg_fil = "The category selected is Shoes.";
        this.curCat = "Shoes";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = false;
        this.isShoes = true;
        break;
      case "socks":
        this.msg_fil = "The category selected is Socks.";
        this.curCat = "Socks";
        this.isTop = false;
        this.isBottom = false;
        this.isHat = false;
        this.isAccessory = false;
        this.isSocks = true;
        this.isShoes = false;
        break;
    }

    // process to display images

    return this.msg_fil;
  }
}
