import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuariosService: UsuarioService,
    public router: Router
  ) {

  }

  canActivate(): boolean {

    if (this._usuariosService.estaLogueado()) {
          console.log( 'PASO POR EL GUARD' );
          return true;
        }else {
          console.log('Bloqueado por el guard');
          this.router.navigate(['/login']);
        }
  }
}
