import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa';

  update: boolean = false;

  constructor(updates: SwUpdate) {
    updates.versionUpdates.subscribe(event => {
      this.update = true
    })
  }
}
