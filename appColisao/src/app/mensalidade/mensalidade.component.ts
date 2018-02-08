import { MesesServices } from './services/meses.services';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mensalidade',
  templateUrl: './mensalidade.component.html',
  styleUrls: ['./mensalidade.component.css']
})
export class MensalidadeComponent implements OnInit {
  @ViewChild('mySidebar') myDiv: ElementRef;
  flag:boolean = false;
  mensalidade:string = "Bem Vindo ao Controle de Mensalidade";
  private meses:any[];
  constructor(private mesesServices:MesesServices) { }

  ngOnInit() 
  {
    this.menuAutomatico();
    this.meses = this.mesesServices.getMeses();
  }
  closeMenu()
  {
    this.myDiv.nativeElement.style.display = "none";
  }
  openMenu()
  { 
    this.myDiv.nativeElement.style.display = "block";
  }
  menuAutomatico()
  {
    if(!this.flag)
    {
      this.closeMenu();
      this.flag = true;
    }else{
      this.openMenu();
      this.flag = false;
    }
  }
}
