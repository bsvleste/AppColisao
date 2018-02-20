import { Jogadores } from './../jogadores';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meses } from '../meses';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { MesesServices } from './../services/meses.services';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {
  inscricao:Subscription;
  mes:Meses;
  id_mes:number;
  jogadores:Jogadores;
  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:HttpClient ) { }

  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        this.mes = this.mesesServices.getMes(id);
        this.mesesServices.getMensalidade(id).subscribe(data => {this.jogadores = data;console.log(this.jogadores)});        
      }
    );
    
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes},(jog)=>{this.jogadores = jog.data});
    console.log(this.inscricao);
  } 
}
