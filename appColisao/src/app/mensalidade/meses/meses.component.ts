import { Jogadores } from './../jogadores';
import { Http, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meses } from '../meses';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { MesesServices } from './../services/meses.services';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {
  public inscricao:Subscription;
  mes:Meses;
  id_mes:number;
  jogadores:any;
  jog:Jogadores;
  msg:boolean = false;
  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:Http ) { }

  ngOnInit() {    
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
         
        this.mes = this.mesesServices.getMes(id);
        this.mesesServices.getMensalidade(id).subscribe(data => {this.jogadores = data;console.log(this.jogadores)});        
      }
    );  
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes},(jog)=>{this.jogadores = jog.data});
    

  }
  /*updateMensalidade(idMes:number,valor:number,idMensalidade:number)
  {
    let teste =  this.mesesServices.updateMensalidade(idMes,valor, idMensalidade).subscribe();
    return teste;
  }*/
  updateMensalidade(jogador:Jogadores)
  {
    this.mesesServices.updateMensalidade(jogador).subscribe((data)=>{  
      console.log(jogador);
      //let intervalo = setTimeout(this.teste,3000);
      this.msg = true;
      setTimeout(()=>{
        this.msg = false;
      },2000);
      //this.msg  = true;
    },
    (error)=>{console.log('Error'+error)});
    //this.http.post('http://192.168.137.1/portifoliogithub/registro/app/php/mensalidade.php',jogador).subscribe((data)=>{console.log(jogador)},(error)=>{console.log('Error'+error)});
       
  }
  
}
