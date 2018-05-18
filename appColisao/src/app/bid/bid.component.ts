
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  @ViewChild('cadastroBid') myDiv:ElementRef;  
  @ViewChild('btnBid') bidBtn:ElementRef;
  @ViewChild('btnEnviar') enviarBtn:ElementRef;
  bid:string = "Bem Vindo ao BID";
  guarda:Array<any>; 
  private respostaBid;
  flag:boolean = false;
  form:boolean = false;
  escondeBid:boolean = false;
  perteceJogador:boolean = false;
  msg:string="Encerramento em, 2 Dias, H:14:M:5 e SS:40, do Bid" ; 
  exibeDados:FirebaseListObservable<any[]>;
  constructor( private angularFire: AngularFireDatabase, public bd:AngularFireDatabase) {
    this.exibeDados  = bd.list('bid');
   }

  ngOnInit() 
  {
    this.mostraCadastro();
    this.guarda = new Array<any>();
    this.escondeBotaoBid();
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
    this.angularFire.list('bid').push({
      id:teste[0].nome,
      bid:this.respostaBid
    }).then((t:any)=> this.respostaBid = true,
      (e:any)=> console.log(e.message));
  }

  escondeBotaoBid()
  {
    let ref = this.bd.list('bid');
    let teste = JSON.parse(localStorage.getItem('currentuser'));    
    let usuario={};
    this.exibeDados.subscribe(snapshot=>{
      snapshot.forEach(snapshot =>{
        
        if(snapshot.id == teste[0].nome)
        {
          console.log(snapshot.id);
          this.perteceJogador = true
          this.bidBtn.nativeElement.style.display = "block";
          this.enviarBtn.nativeElement.style.display = "none";
        }else{
          this.bidBtn.nativeElement.style.display = "none";         
          this.enviarBtn.nativeElement.style.display = "block";
          console.log(snapshot.id, "seus putos");
          //this.perteceJogador = false;
        }    
      })      
    })    
  }

}
