<<<<<<< HEAD
import { Http, RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meses } from '../meses';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { MesesServices } from './../services/meses.services';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { Jogadores } from '../jogadores';

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
  resultado:number = 0 ;
  
  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:Http ) {}
               
  ngOnInit() {    
   
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        this.mes = this.mesesServices.getMes(id);
        this.mesesServices.getMensalidade(id).subscribe(data => {
          this.jogadores = data;
          console.log(this.jogadores);
          this.somaMensalidade();
        });        
      }     
    );
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes},(jog)=>{this.jogadores = jog.data});

  }
  /*updateMensalidade(idMes:number,valor:number,idMensalidade:number)
  {
    let teste =  this.mesesServices.updateMensalidade(idMes,valor, idMensalidade).subscribe();
    return teste;
  }*/

  somaMensalidade()
  {
    let somaValor;
    let soma:number= 0;
    this.resultado = 0;
    for(somaValor in this.jogadores) 
    {              
      soma = Number(this.jogadores[somaValor].Valor);
      this.resultado += soma;
    }
    
  }
  updateMensalidade(jogador:Jogadores)
  {     
    this.mesesServices.updateMensalidade(jogador).subscribe((data)=>{  
      this.jog = data;
      console.log(this.jog);
      //let intervalo = setTimeout(this.teste,3000);
      this.msg = true;
      setTimeout(()=>{
        this.msg = false;
      },2000);
      //this.msg  = true;
    },
    (error)=>{console.log('Error'+error)});
    //this.http.post('http://192.168.137.1/portifoliogithub/registro/app/php/mensalidade.php',jogador).subscribe((data)=>{console.log(jogador)},(error)=>{console.log('Error'+error)});
    this.somaMensalidade(); 
  }
  
  
}
=======
import { Http, RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meses } from '../meses';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { MesesServices } from './../services/meses.services';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { Jogadores } from '../jogadores';

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
  resultado:number = 0 ;
  
  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:Http ) {}
               
  ngOnInit() {    
   
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        this.mes = this.mesesServices.getMes(id);
        this.mesesServices.getMensalidade(id).subscribe(data => {
          this.jogadores = data;
          console.log(this.jogadores);
          this.somaMensalidade();
        });        
      }     
    );
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes},(jog)=>{this.jogadores = jog.data});

  }
  /*updateMensalidade(idMes:number,valor:number,idMensalidade:number)
  {
    let teste =  this.mesesServices.updateMensalidade(idMes,valor, idMensalidade).subscribe();
    return teste;
  }*/

  somaMensalidade()
  {
    let somaValor;
    let soma:number= 0;
    this.resultado = 0;
    for(somaValor in this.jogadores) 
    {              
      soma = Number(this.jogadores[somaValor].Valor);
      this.resultado += soma;
    }
    
  }
  updateMensalidade(jogador:Jogadores)
  {     
    this.mesesServices.updateMensalidade(jogador).subscribe((data)=>{  
      this.jog = data;
      console.log(this.jog);
      //let intervalo = setTimeout(this.teste,3000);
      this.msg = true;
      setTimeout(()=>{
        this.msg = false;
      },2000);
      //this.msg  = true;
    },
    (error)=>{console.log('Error'+error)});
    //this.http.post('http://192.168.137.1/portifoliogithub/registro/app/php/mensalidade.php',jogador).subscribe((data)=>{console.log(jogador)},(error)=>{console.log('Error'+error)});
    this.somaMensalidade(); 
  }
  
  
}
>>>>>>> f07fd22f033f9ee39d7eac9cef00ea92a5f5ff68
