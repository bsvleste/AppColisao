import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado:boolean = false;
  mostraMenuEmmiter = new EventEmitter<boolean>();
  private user:any = [
    {email:'bvaleiro@gmail.com',senha:'aeioub'},
    {email:'mvaleiro@gmail.com',senha:'laralara'}
  
  ];
  
  private teste:Usuario;
  private flag:boolean = false;
  constructor(private router:Router) { }

  getUser()
  {
    return this.user;
  }
  fazerLogin(usuario:Usuario)
  {
    let users = this.getUser();
    for (let user of users) {
      if(user.email == usuario.email && user.senha == usuario.senha)
      {
        this.flag = true;
    }
  }
  if(this.flag)
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
