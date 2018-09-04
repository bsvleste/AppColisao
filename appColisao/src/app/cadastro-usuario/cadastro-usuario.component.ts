import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  public flag:boolean = false;
  usuario:any;
  resultado:any;
  dados:boolean = true;
  sucesso:boolean = false;
  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit() {
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
    setCadastro(f)
    {
      this.usuario = f.value
      
      this.http.post('http://192.168.0.158/arquivosGit/registro/app/php/cadastroUsuario.php',this.usuario)
      .subscribe((data)=>{
        this.resultado = data;
        console.log(this.resultado);
        if(this.resultado[0].cadastro == 0){
          this.dados = false;
          this.sucesso = false;
        }else{
          this.dados = true;
          this.sucesso = true;
          this.resetaFormulario(f);
          this.route.navigate(['login']);
        }
      },
      (error)=>{
        console.log('Error'+error)
      });
    } 
    
    resetaFormulario(f)
    {
      this.dados = true;     
      f.reset();
    }

}
