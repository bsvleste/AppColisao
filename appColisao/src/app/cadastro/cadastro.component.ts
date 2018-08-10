import { Router } from '@angular/router';
import { Jogadores } from './../mensalidade/jogadores';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CadastroService } from './service/cadastro.service';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('mySidebar') myDiv: ElementRef;
  flag:boolean = true;
  public jogadores;
  
  constructor(private cadServices:CadastroService,
              private router:Router) { }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios(){
    this.cadServices.getUsuarios().subscribe((data)=>{
      this.jogadores = data;
      console.log(this.jogadores);
    });
  }
  deletaJogador(id)
  {
    let idJogador = id;
    this.cadServices.deletaJogador(idJogador).subscribe((data)=>{
      this.getUsuarios();
    })
  }    
}
