import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Jogadores } from '../mensalidade/jogadores';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  usuarioAutenticado:boolean = false;
  usuarioPermissao:boolean = false;
  mostraMenu:boolean = false;
  mostraMenuEmmiter = new EventEmitter<boolean>();
  permissaoMenu = new EventEmitter<boolean>();
  emailEsenha = new EventEmitter<boolean>();

  private adm:any;
  private flag:boolean = false;
  constructor(private router:Router, private http:HttpClient) { }

  getUsuario(usuario:Usuario):Observable<Usuario>  
  { 
    let json = JSON.stringify(usuario);
    //return this.http.post<Usuario>('http://192.168.0.125/portifolioGitHub/registro/app/php/login.php',usuario);
    //pc no ccsp  
    //return this.http.post<Usuario>('http://192.168.0.158/arquivosGit/registro/app/php/login.php',usuario);
    //pc em casa
    return this.http.post<Usuario>('http://192.168.1.32/arquivosGit/registro/app/php/login.php',usuario);
  } 
  fazerLogin(usuario)
  {
    this.flag = true;
  
    if(this.flag)
    {
      if(usuario[0].perm === '1')
      {
       this.permissaoMenu.emit(true);
       this.usuarioPermissao = true;
       
      }else
      {
        this.usuarioPermissao = false;
        this.permissaoMenu.emit(false);
        
      }
        
        this.usuarioAutenticado = true;
        this.mostraMenuEmmiter.emit(true);
        this.emailEsenha.emit(true);
       // localStorage.setItem('mostraMenu', 'true');
        this.router.navigate(['/']);
      }else
      {
        this.emailEsenha.emit(false);
        this.usuarioAutenticado = false;
        this.mostraMenuEmmiter.emit(false);      
          console.log("usuairo ou senha invalidos");
      }
      console.log(usuario[0].nome);
 
} 
  usuarioPermi()
  {
    console.log("vwerdade");
    let local = localStorage.getItem('currentuser');
    let per = JSON.parse(local);
    if(per)
    {

      if(per[0].perm == 1)
      {
        return this.usuarioAutenticado = true;
      }else{
        return this.usuarioAutenticado =false;
      }
    } 
  }
  usuarioLogado()
  {
      console.log("vwerdade");
      let local = localStorage.getItem('currentuser');
      let per = JSON.parse(local);
       
      if(localStorage.currentuser)
      {
        return this.usuarioAutenticado = true;
      }else{
        return this.usuarioAutenticado =false;
      }
        
  }
}
