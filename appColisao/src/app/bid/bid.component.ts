import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  @ViewChild('cadastroBid') myDiv:ElementRef;
  @ViewChild('myForm') myform:ElementRef;
  bid:string = "Bem Vindo ao BID";
  flag:boolean = false;
  form:boolean = false;
  msg:string="Encerramento em, 2 Dias, H:14:M:5 e SS:40, do Bid" ; 
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
}
