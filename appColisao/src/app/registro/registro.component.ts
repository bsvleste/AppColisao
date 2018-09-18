import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }
  public checkList=[];
  public jogadores=[
    {id:1,nome:'Bruno'},
    {id:2,nome:'lennon'},
    {id:3,nome:'Rafael'}];
    
  ngOnInit() {
  }
  teste(f)
  {
    console.log(f.value);
  }
  passaValor(option,event)
  {
    if(event.target.checked)
    {
      this.checkList.push(option);
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
}
