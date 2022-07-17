import { Injectable } from '@angular/core';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import Wearable from './models/wearable';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  wearableArr = new Array<Wearable>();
  wearableArrString: string = "";


  constructor(private storage: StorageMap) {
    // init wearables set
    this.storage.set('wearables', this.wearableArrString).subscribe(() => {});
  }

  getWearables(): Wearable[] {
    this.storage.get('wearables', {type: 'string'}).subscribe((wearables) => {
      this.wearableArrString = <string>wearables;
    })
    
    JSON.parse(this.wearableArrString).forEach((element: Wearable) => {
      this.wearableArr.push(element);
    })


    return this.wearableArr;
  }

  setWearables(wearables: Wearable[]) {
    this.wearableArr = wearables;
    this.wearableArrString = JSON.stringify(this.wearableArr);
    this.storage.set('wearables', this.wearableArrString).subscribe(() => {});
  }
}
