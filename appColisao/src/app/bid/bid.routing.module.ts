import { Routes, RouterModule } from '@angular/router';
import { BidComponent } from './bid.component';
import { NgModule } from '@angular/core';
const bidRounting:Routes = [
    //add rota filhas
    {path:'', component:BidComponent}
];
@NgModule({
    imports:[RouterModule.forChild(bidRounting)],
    exports:[RouterModule]
})
export class BidRoutingModule{}