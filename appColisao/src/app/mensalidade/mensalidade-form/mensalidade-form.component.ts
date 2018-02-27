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

    
  }
}
