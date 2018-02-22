import {HttpClient} from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MesesServices } from '../services/meses.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Jogadores } from '../jogadores';
import { MesesComponent } from '../meses/meses.component';

@Component({
  selector: 'app-mensalidade-form',
  templateUrl: './mensalidade-form.component.html',
  styleUrls: ['./mensalidade-form.component.css']
})
export class MensalidadeFormComponent implements OnInit {
  
  inscicao: Subscription;
  jogadores:Jogadores;

  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router,
              private http:HttpClient ) { }

  ngOnInit() {
    this.getJogadores();
  } 

  getJogadores()
  {
    this.inscicao = this.route.params.subscribe(
      (params:any)=>{
        let id_jogador = params['id_jogador'];
        let id = params['id'];
        this.mesesServices.getMensalidade(id).subscribe(data => {
          for(let i of data)
          {
            let jogador = i;
            if(jogador.Id_jogador == id_jogador)            
               this.jogadores = jogador;            
          }        
          console.log(this.jogadores);
        });        
      }
    )
  }
}
