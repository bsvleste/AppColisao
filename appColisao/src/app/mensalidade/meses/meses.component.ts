import { MesesServices } from './../services/meses.services';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meses } from '../meses';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {
  inscricao:Subscription;
  mes:Meses;

  constructor(private route:ActivatedRoute,
              private mesesServices:MesesServices,
              private router:Router ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];
        this.mes = this.mesesServices.getMes(id);
        if(this.mes == null)
        {
          this.mes = {id:1,descricao:'janeiro'};
        }
      }
    );
    //this.inscricao = this.route.data.subscribe((info)=>{this.mes = info.mes});
    console.log(this.inscricao);
  }

}
