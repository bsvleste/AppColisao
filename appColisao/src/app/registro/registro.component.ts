import { log } from 'util';
import { Jogadores } from './../mensalidade/jogadores';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('btnEnviar') enviarBtn:ElementRef;
  
  public teste = 0;
  public quadro:boolean = false;
  private flag:boolean = true;
  public checkList = [{quadro:0,jogadores:[ ]}];
  public perfil =[];
  public jogadores=[
    {id:1,nome:'Bruno'},
    {id:2,nome:'lennon'},
    {id:3,nome:'edvan'},
    {id:4,nome:'marcio'},
    {id:5,nome:'thiago'},
    {id:6,nome:'nicola'},
    {id:7,nome:'daniel'},
    {id:8,nome:'marcos'},
    {id:9,nome:'Rafael'}];
  constructor() { }
    
  ngOnInit()
  {
    //console.log(this.checkList);
  }
  
  passaValor(option,event,f)
  {
    if(event.target.checked)
    {
      let teste = {id:option.id,nome:option.nome,perfil:[]}
      this.checkList[0].jogadores.push(teste);
    }else{
      //let i = this.checkList.findIndex(obj =>obj == option);
      //this.checkList[0].jogadores.splice(i,1);
      //console.log(option.id);
      for(let i=0;i< this.checkList[0].jogadores.length;i++)
      {
        //console.log(this.checkList[0].jogadores[i].id == option.id);
        if(this.checkList[0].jogadores[i].id == option.id){
          this.checkList[0].jogadores.splice(i,1);   
        }
      }
     
    }
    console.log(this.checkList);
  }  
  cadastraJogadores(f)
  {
    let teste = f.value;
    this.checkList[0].quadro = teste;
    this.checkList[0].jogadores[0].perfil.push({gol:2,falta:3});
    for (const i in this.checkList[0].jogadores) {
      this.perfil.push(this.checkList[0].jogadores[i]);
    }
    //console.log(this.perfil);
    this.flag = false;
  }
  soma()
  {
    this.teste++;
    console.log(this.teste);
  }
}
