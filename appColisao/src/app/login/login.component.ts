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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  fazerLogin(form)
  {
    console.log(form);
    if(form.value.senha.length < 5){
      console.log("funfou");
    }else{

      this.usuario = form.value;
      console.log(this.usuario);
      this.authService.fazerLogin(this.usuario);
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
  verificaSenha(form)
  {
    if(form.value.senha.length < 5 )
    {
      console.log("meno que 5");
    }
  }
}
