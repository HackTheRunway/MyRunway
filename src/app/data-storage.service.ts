import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
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

        if (this.wearableArrString == null) { 
          this.storage.set('wearables', "").subscribe({
            next: () => {
              /* Called if data is valid or `undefined` */
              console.log('wearablesStr instantiated');
            }
          });

        }

      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      },
    });

    this.storage.get('numWearables', { type: 'number' }).subscribe({
      next: (numWearables) => {
        /* Called if data is valid or `undefined` */
        console.log('numWearables read: ' + numWearables);

        if (numWearables == null) {
          this.storage.set('numWearables', <number>0).subscribe({
            next: () => {
              /* Called if data is valid or `undefined` */
              console.log('numWearables success: ' + numWearables);
            },
            error: (error) => {
      
              console.log('error getting: ' + error);
            }
          });
        }
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      }
    });


    this.storage.get('wearables', { type: 'string' }).subscribe({
      next: (wearables) => {
        this.wearableArrString = <string>wearables;
        console.log('wearablesStrInitsecondread: ' + this.wearableArrString);
      },
      error: (error) => {
        console.log('error getting: ' + error);
      },
    });

    this.storage.get('numWearables', { type: 'number' }).subscribe({
      next: (numWearables) => {
        console.log('numWearables secondread: ' + numWearables);
      },
      error: (error) => {
        console.log('error getting: ' + error);
      }
    });

  }

  // getWearables(): Wearable[] {
  //   this.wearableArr = new Array<Wearable>();

  //   this.storage.get('wearables', { type: 'string' }).subscribe({
  //     next: (wearables) => {
  //       /* Called if data is valid or `undefined` */
  //       this.wearableArrString = <string>wearables;
  //       // console.log('wearablesStr: ' + this.wearableArrString);

  //       if (this.wearableArrString) {
  //         JSON.parse(this.wearableArrString).forEach((element: Wearable) => {
  //           this.wearableArr.push(element);
  //           console.log(element.title)
  //         });
  //       }

        
  //     },
  //     error: (error) => {
  //       /* Called if data is invalid */
  //       console.log('error getting: ' + error);
  //     },
      
  //   });

  //   console.log(this.wearableArr);
  //   return this.wearableArr;  

    
  // }

  async getWearablesAsync(): Promise<Wearable[]> {
    this.wearableArr = new Array<Wearable>();

    await this.storage.get('wearables', { type: 'string' }).subscribe({
      next: (wearables) => {
        /* Called if data is valid or `undefined` */
        this.wearableArrString = <string>wearables;
        // console.log('wearablesStr: ' + this.wearableArrString);

        if (this.wearableArrString) {
          JSON.parse(this.wearableArrString).forEach((element: Wearable) => {
            this.wearableArr.push(element);
            console.log(element.title)
          });
        }
        
      },
      error: (error) => {
        /* Called if data is invalid */
        console.log('error getting: ' + error);
      },
      
    });

    console.log(this.wearableArr);
    return this.wearableArr;
    
  }

  // getNumWearables(): number {
  //   this.storage.get('numWearables', { type: 'number' }).subscribe({
  //     next: (numWearables) => {
  //       /* Called if data is valid or `undefined` */
  //       console.log('numWearables: ' + numWearables);
  //       this.numWearables = <number>numWearables;
  //     },
  //     error: (error) => {
  //       /* Called if data is invalid */
  //       console.log('error getting: ' + error);
  //     }
  //   });

  //   return this.numWearables;
  // }

  // async getNumWearablesAsync(): Promise<number> {
  //   await this.storage.get('numWearables', { type: 'number' }).subscribe({
  //     next: (numWearables) => {
  //       /* Called if data is valid or `undefined` */
  //       console.log('numWearables: ' + numWearables);
  //       this.numWearables = <number>numWearables;
  //     },
  //     error: (error) => {
  //       /* Called if data is invalid */
  //       console.log('error getting: ' + error);
  //     }
  //   });

  //   return this.numWearables;
  // }


  async setWearables(wearables: Wearable[], numWearables: number) {
    this.wearableArr = wearables;

    this.wearableArrString = JSON.stringify(this.wearableArr);

    this.storage.set('wearables', this.wearableArrString).subscribe({
      next: () => {
        /* Called if data is valid or `undefined` */
        // console.log('wearablesStr success: ' + this.wearableArrString);
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
