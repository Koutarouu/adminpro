import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default-dark.css",
    tema: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private _document ) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );//transformamos el json a string para que se pueda guardar en el localStorage
  }

  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));// regresamos a su modo original con el parse
      // console.log('Cargando del localStorage');

      this.aplicarTema( this.ajustes.tema );
    }else{
      // console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }

  }

  aplicarTema( tema: string ) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

