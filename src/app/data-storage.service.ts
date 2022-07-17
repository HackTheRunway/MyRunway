import { Injectable } from '@angular/core';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import Wearable from './models/wearable';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  wearableArr = new Array<Wearable>();
  wearableArrString: string = '';
  numWearables: number = 0;

  constructor(private storage: StorageMap) {
    // init wearables set
    this.storage.get('wearables', { type: 'string' }).subscribe({
      next: (wearables) => {
        /* Called if data is valid or `undefined` */
        this.wearableArrString = <string>wearables;
        console.log('wearablesStrInit: ' + this.wearableArrString);
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      },
    });

    // if (this.wearableArrString.length > 0) {
    //   JSON.parse(this.wearableArrString).forEach((element: Wearable) => {
    //     this.wearableArr.push(element);
    //   });
    // } else {
    //   console.log('init wearables');
    //   this.storage.set('wearables', this.wearableArrString).subscribe({
    //     next: () => {},
    //     error: (error) => {
    //       console.log('error setting: ' + error);
    //     },
    //   });
    // }

    this.storage.get('numWearables', { type: 'number' }).subscribe({
      next: (numWearables) => {
        /* Called if data is valid or `undefined` */
        console.log('numWearables: ' + numWearables);
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      }
    });

    // if (! this.numWearables ) {
    //   console.log("init numWearables");

    //   this.storage.set('numWearables', 0).subscribe({
    //     next: () => {
    //       /* Called if data is valid or `undefined` */
    //       console.log('numWearables reset');
    //     },
    //     error: (error) => {
    //       /* Called if data is invalid */
    //       console.log('error: ' + error);
    //     }
    //   });
    // }
  }

  getWearables(): Wearable[] {
    this.storage.get('wearables', { type: 'string' }).subscribe({
      next: (wearables) => {
        /* Called if data is valid or `undefined` */
        this.wearableArrString = <string>wearables;
        console.log('wearablesStr: ' + this.wearableArrString);
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      },
    });

    if (this.wearableArrString) {
      JSON.parse(this.wearableArrString).forEach((element: Wearable) => {
        this.wearableArr.push(element);
      });
    }

    console.log('wearables: ' + this.wearableArr);

    return this.wearableArr;
  }

  getNumWearables(): number {
    this.storage.get('numWearables', { type: 'number' }).subscribe({
      next: (numWearables) => {
        /* Called if data is valid or `undefined` */
        console.log('numWearables: ' + numWearables);
        this.numWearables = <number>numWearables;
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      }
    });

    return this.numWearables;
  }


  setWearables(wearables: Wearable[], numWearables: number) {
    this.wearableArr = wearables;
    this.wearableArrString = JSON.stringify(this.wearableArr);
    console.log('wearablesStr2: ' + this.wearableArrString);
    this.storage.set('wearables', this.wearableArrString).subscribe({
      next: () => {
        /* Called if data is valid or `undefined` */
        console.log('wearablesStr success: ' + this.wearableArrString);
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      },
    });

    this.storage.set('numWearables', numWearables).subscribe({
      next: () => {
        /* Called if data is valid or `undefined` */
        console.log('numWearables success: ' + numWearables);
      },
      error: (error) => {

        console.log('error getting: ' + error);
      }
    });

  }

  clearData() {
    this.storage.set('wearables', "").subscribe({
      next: () => {
        /* Called if data is valid or `undefined` */
        console.log('wearablesStr cleared');
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error: ' + error);
      },
    });

    this.storage.set('numWearables', 0).subscribe({
      next: () => {
        /* Called if data is valid or `undefined` */
        console.log('numWearables cleared');
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error: ' + error);
      },
    });

  }
}
