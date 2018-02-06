import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mensalidade',
  templateUrl: './mensalidade.component.html',
  styleUrls: ['./mensalidade.component.css']
})
export class MensalidadeComponent implements OnInit {
  @ViewChild('mySidebar') myDiv: ElementRef;

  mensalidade:string = "Bem Vindo ao Controle de Mensalidade";
  constructor() { }

  ngOnInit() 
  {
    this.closeMenu();
  }
  closeMenu()
  {
    this.myDiv.nativeElement.style.display = "none";
  }
  openMenu()
  { 
    console.log("Clicou");
    this.myDiv.nativeElement.style.display = "block";
  }
}
