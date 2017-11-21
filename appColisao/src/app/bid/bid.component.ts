import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  bid:string = "Bem Vindo ao BID";
  constructor() { }

  ngOnInit() {
  }

}
