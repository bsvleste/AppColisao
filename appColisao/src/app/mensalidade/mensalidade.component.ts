import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensalidade',
  templateUrl: './mensalidade.component.html',
  styleUrls: ['./mensalidade.component.css']
})
export class MensalidadeComponent implements OnInit {
  mensalidade:string = "Mensalidade";
  constructor() { }

  ngOnInit() {
  }

}
