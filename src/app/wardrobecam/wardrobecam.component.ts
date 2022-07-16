import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WearableCategory } from '../models/wearable-category';


@Component({
  selector: 'app-wardrobecam',
  templateUrl: './wardrobecam.component.html',
  styleUrls: ['./wardrobecam.component.scss']
})
export class WardrobecamComponent implements OnInit {
  wearableOptions = [WearableCategory.TOP, WearableCategory.BOTTOM, WearableCategory.SOCKS, WearableCategory.SHOES, WearableCategory.ACCESSORY, WearableCategory.HAT];

  // manage page state
  public isPhotoTaken = false;
  public photoTitle = "default-title";
  public photoCategory = "";
  
  fieldsValidated(): boolean {
    return this.photoTitle.length > 0 && this.photoCategory.length > 0 && this.isPhotoTaken;
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

  saveWearable() {
    console.log(this.photoTitle);
    console.log(this.photoCategory);
  }
}