import { MesesServices } from './../services/meses.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {
  private meses:any[];
  constructor(private mesesServices:MesesServices) { }

  ngOnInit() {
    this.meses = this.mesesServices.getMeses();
  }

}
