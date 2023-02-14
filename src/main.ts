import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,QRCodeModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <qrcode [qrdata]="myQrStringData" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>

  `,
})
export class App {
  name = 'Angular';
  myQrStringData = '9845320641';
}

bootstrapApplication(App);
