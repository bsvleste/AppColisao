import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado:boolean = false;
  mostraMenuEmmiter = new EventEmitter<boolean>();
  constructor(private router:Router) { }

  fazerLogin(usuario:Usuario)
  {
    if(usuario.email === "bvaleiro@gmail.com" && usuario.senha === "aeioub")
    {
      this.usuarioAutenticado = true;
      this.mostraMenuEmmiter.emit(true);
      this.router.navigate(['/']);
    }else
    {
      this.usuarioAutenticado = false;
      this.mostraMenuEmmiter.emit(false);
      console.log("usuairo ou senha invalidos");
    }
  }
  usuarioLogado()
  {
    return this.usuarioAutenticado;
  }
}
