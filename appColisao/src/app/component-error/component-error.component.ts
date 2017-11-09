import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './component-error.component.html',
  styleUrls: ['./component-error.component.css']
})
export class ComponentErrorComponent implements OnInit {
  @Input () mostraError:boolean;
  @Input () msgError:string;

  constructor() { }

  ngOnInit() {
  }

}
