import { HttpClient } from '@angular/common/http';
import { CadastroService } from './../service/cadastro.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-cad',
  templateUrl: './form-cad.component.html',
  styleUrls: ['./form-cad.component.css']
})
export class FormCadComponent implements OnInit {
  @ViewChild('f') form : ElementRef;
  public inscricao:Subscription;
  jogador:any;
  jog = [];
  teste:any;
  constructor(private route:ActivatedRoute,
              private cadServico:CadastroService,
            private http:HttpClient) { }

  ngOnInit() 
  {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id  = params['id'];
        this.teste = id;
        this.cadServico.getJogador(id).subscribe((data)=>{
          this.jog = data;
          console.log(this.jog);
        })
      }
    )    
  }
  alterar(f)
  { 

    let id = this.form.nativeElement.id.value;
    let permissao = this.form.nativeElement.select.value;
    let alterarJogador = {'id':id,
                          'permissao':permissao};
    this.http.post('http://192.168.1.32/arquivosGit/registro/app/php/alteraPermissao.php',alterarJogador).subscribe((data)=>{
      console.log(data);
    })
    //console.log(alterarJogador);
   }
}
