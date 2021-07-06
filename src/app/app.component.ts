import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey, Hola';

  curso:string = 'Angular con Reina';
  profesor:string = 'David Reina';
}
