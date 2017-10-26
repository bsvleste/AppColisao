import { LoginComponent } from './login/login.component';
import { MensalidadeComponent } from './mensalidade/mensalidade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidComponent } from './bid/bid.component';

const routes: Routes = [
  {path:"", pathMatch:"full",component:LoginComponent},
  {path:'bid',component:BidComponent},
  {path:'mensalidade',component:MensalidadeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
