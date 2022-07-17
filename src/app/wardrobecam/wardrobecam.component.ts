import { Component, OnInit } from '@angular/core';
import {Subject, Observable, map} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WearableCategory } from '../models/wearable-category';
import Wearable from '../models/wearable';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-wardrobecam',
  templateUrl: './wardrobecam.component.html',
  styleUrls: ['./wardrobecam.component.scss']
})
export class WardrobecamComponent implements OnInit {
  wearableOptions = [WearableCategory.TOP, WearableCategory.BOTTOM, WearableCategory.SOCKS, WearableCategory.SHOES, WearableCategory.ACCESSORY, WearableCategory.HAT];

  // manage page state
  public isPhotoTaken = false;
  public wearableTitle = "";
  public wearableCategory = "";
  public isFieldsValidated = false;
  wearables: Wearable[];
  service: DataStorageService;
  numWearables: number = 0;

  private fieldsValidated(): boolean {
    return this.wearableTitle.length > 0 && this.wearableCategory.length > 0 && this.isPhotoTaken;
  }

  public SnapshotButtonText = "Snap"

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = "";
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage | undefined;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  constructor(service: DataStorageService) { 
    this.service = service;
    this.wearables = service.getWearables();
  }
  
  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.toggleWebcam()
  }

  private toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;

    if (this.isPhotoTaken) {
      this.SnapshotButtonText = "Snap";
      this.isPhotoTaken = false;
      
    } else {
      this.SnapshotButtonText = "Retake";
      this.isPhotoTaken = true;
    }
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
    console.warn(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  getKeyName(value: string) {
    return Object.entries(WearableCategory).find(([key, val]) => val === value)?.[0];
  }
  
  modelChangeFn(value: any) {
    this.isFieldsValidated= this.fieldsValidated();
  }

  saveWearable() {
    this.numWearables = this.service.getNumWearables() + 1

    if (this.webcamImage && this.wearableCategory && this.wearableTitle) {
      var newWearable = new Wearable(this.numWearables, this.wearableTitle, <WearableCategory>this.getKeyName(this.wearableCategory), this.webcamImage.imageAsBase64)

      this.wearables.push(newWearable);
      this.service.setWearables(this.wearables, this.numWearables);

      console.log(this.wearables)

      this.isFieldsValidated = false;
      this.wearableTitle = "";
      this.wearableCategory = "";
      this.webcamImage = undefined;
      this.isPhotoTaken = false;
      this.SnapshotButtonText = "Snap";
      this.showWebcam = true;

      // var image = new Image();
      // image.src = "data:image/png;base64," + newWearable.image.toString();
      // document.body.appendChild(image);
    }
  }

  public getWearableBtn() {
   console.log( this.service.getWearables())
  }

}