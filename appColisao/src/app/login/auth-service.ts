import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  usuarioAutenticado:boolean = false;
  mostraMenuEmmiter = new EventEmitter<boolean>();
  permissaoMenu = new EventEmitter<boolean>();
  emailEsenha = new EventEmitter<boolean>();

  private user:any = [
    {email:'bvaleiro@gmail.com',senha:'aeioub',permissao:'adm'},
    {email:'mvaleiro@gmail.com',senha:'laralara',permissao:'jogador'}
  
  ];
  
  private adm:any;
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
        this.adm = user;
        //console.log('teste'  + this.teste.permissao);
        
    }
  }
  if(this.flag)
  {
    if(this.adm.permissao === 'adm')
    {
      this.permissaoMenu.emit(true);
    }else
    {
      this.permissaoMenu.emit(false);
    }
    this.usuarioAutenticado = true;
    this.mostraMenuEmmiter.emit(true);
    this.emailEsenha.emit(true);
    this.router.navigate(['/']);
  }else
  {
    this.emailEsenha.emit(false);
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
