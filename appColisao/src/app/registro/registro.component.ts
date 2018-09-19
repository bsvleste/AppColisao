import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('cadastroQuadro') myDiv:ElementRef;  
  @ViewChild('btnEnviar') enviarBtn:ElementRef;
  
  public quadro:boolean = false;
  private flag:boolean = true;
  public checkList=[];
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
    this.mostraCadastro();
  }
  
  closeCad()
  {
    this.myDiv.nativeElement.style.display = "none";
  }
  openCad()
  { 
  
    this.myDiv.nativeElement.style.display = "block";
  }
  mostraCadastro()
  { 
    if(!this.flag)
    {
      this.closeCad();
      this.flag = true;
    }else
    {
      this.openCad();
      this.flag = false;
    }
  }
  passaValor(option,event,f)
  {
    if(event.target.checked)
    {
      this.checkList.push({jogadores:{option}});
    }else{
      let i = this.checkList.findIndex(obj =>obj == option);
      this.checkList.splice(i,1);
      /*for(let i=0;i< this.checkList.length;i++)
      {
        if(this.checkList[i] == option.id){
          this.checkList.splice(i,1);   
        }
      }*/
    }
    console.log(this.checkList);
  }
  cadastraJogadores(f)
  {
    let teste = f.value;
    this.checkList.push({quadro:teste});
    console.log(this.checkList);
  }
}
