
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  @ViewChild('cadastroBid') myDiv:ElementRef;
  @ViewChild('myForm') myform:ElementRef;
  bid:string = "Bem Vindo ao BID";
  guarda:Array<any>; 
  private respostaBid;
  flag:boolean = false;
  form:boolean = false;
  escondeBid:boolean = false;
  msg:string="Encerramento em, 2 Dias, H:14:M:5 e SS:40, do Bid" ; 
  exibeDados:FirebaseListObservable<any[]>;

  constructor( private angularFire: AngularFireDatabase, bd:AngularFireDatabase) {
    this.exibeDados  = bd.list('guarda');
   }

  ngOnInit() 
  {
    this.mostraCadastro();
    this.guarda = new Array<any>();
  }
  closeCad()
  {
    this.myDiv.nativeElement.style.display = "none";
  }
  openCad()
  { 
    this.myDiv.nativeElement.style.display = "block";
  }
  closeForm()
  {
    this.myform.nativeElement.style.display = "none";
    this.form = false;
  }
  openForm()
  { 
    this.myform.nativeElement.style.display = "block";
    this.form = true;
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
  cadBid(form)
  { 
      
      this.respostaBid = form.value;
      let teste = JSON.parse(localStorage.getItem('currentuser'));
      /*
      let guardaDados = { "bid":this.respostaBid,"id":teste[0].id};
      this.guarda.push({
        id:teste[0].id,
        bid:this.respostaBid
      })
    console.log("array concatenado ", this.guarda);*/
    this.angularFire.list('guarda').push({
      id:teste[0].nome,
      bid:this.respostaBid
    }).then((t:any)=> this.respostaBid = true,
      (e:any)=> console.log(e.message));
  }
}
