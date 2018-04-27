import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Hospital } from '../../models/hospital.model';


import { SidebarService, UsuarioService, HospitalService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  hospital: Hospital;

  constructor( 
              public _sidebar: SidebarService,
              public _usuarioService: UsuarioService,
              public _hospitalService: HospitalService ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    //this.hospital = this._hospitalService.hospital;
  }

}
