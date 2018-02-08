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
export class MesesComponent implements OnInit, AfterViewInit {
  inscricao:Subscription;
  mes:Meses;
  id_mes:number;
  teste:any[];
  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:HttpClient ) { }

  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        //this.mes = this.mesesServices.getMes(id);
        this.http.get('http://192.168.1.58/arquivosGit/registro/app/php/mensalidadeJaneiro.php?id='+ id).subscribe(
          (data:any[])=>{
            this.teste = data;
            console.log(this.teste);
          }
        )
        if(this.teste == null)
        {
          console.log('abra');
        }
      }
    );
    
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes});
    console.log(this.inscricao);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewinit');
   }
}
