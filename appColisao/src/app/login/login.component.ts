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
  private usuario:any;
  private flag:boolean  = false;
  dados:boolean= true;
  usu:any;
  constructor(private authService: AuthService) { }

  ngOnInit() 
  {
    
  }
  getUsuario(form)
  {
    this.usuario = form.value;
    //console.log(this.usuario);
   this.authService.getUsuario(this.usuario).subscribe(
      data =>{ this.usu = data;console.log(this.usu[0].logado);
        
        this.fazerLogin(this.usu);
      }
    );
  }
  fazerLogin(form)
  {
    /*login do firebase
    this.authFirebase.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).
		then(function(){
      console.log("logado");
		})
		.catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode,errorMessage);
  	// ...
  });*/
  //login do servidor
    let teste = form;
    console.log(teste);
    if(teste[0].logado <= 0)
    {
      console.log('login invaldio');
      this.dados = false;
    }else
    {
        this.authService.emailEsenha.subscribe(
        validaUsuarios => this.dados = validaUsuarios
      );
        this.usuario = form;
        localStorage.setItem('currentuser',JSON.stringify(this.usuario));
        
          this.authService.fazerLogin(teste);
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
