import { log } from 'util';
import { AuthService } from './auth-service';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  minLength:Number = 5;
  private usuario: Usuario = new Usuario();
  private flag:boolean  = false;
  dados:boolean= true;
  constructor(private authService: AuthService) { }

  ngOnInit() 
  {
  }
  fazerLogin(form)
  {
  this.authService.emailEsenha.subscribe(
      validaUsuarios => this.dados = validaUsuarios
    );
      this.usuario = form.value;
      console.log(this.usuario);
      if(this.usuario.senha.length < 5 ){

       this.flag= true;
      }else{
        this.authService.fazerLogin(this.usuario);
        console.log(this.authService.usuarioLogado());
        this.flag = false;
      }
  
}
  // verrifica se o campo é valido e se tem o foco
  verificaCampoInvalido(campo)
  {
    return !campo.valid && campo.touched ;
  }

  // aplica a classe de erro se o campo estiver errado
  aplicaCssError(campo)
  {
    return {'has-error': this.verificaCampoInvalido(campo)}
  }
  verificaSenha()
  {
    return this.flag;
  } 
}
