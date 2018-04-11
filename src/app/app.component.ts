import { Component } from '@angular/core';

import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _ajustes: SettingsService ) {}
}
//con solo inyectar aca el servicio va a disparar el contructor del servicio
//este app component es lo que se carga al principio