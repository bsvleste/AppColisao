import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth-guard';
import { MensalidadeGuard } from './guard/mensalidade.guard';
import { BidComponent } from './bid/bid.component';
/*
usar essa rota quando tiver senha
*/
const routes: Routes = [
  {path:'mensalidade',
        canLoad:[AuthGuard],
        loadChildren:'app/mensalidade/mensalidade.module#MensalidadeModule',
        canActivate:[AuthGuard],
        canActivateChild:[MensalidadeGuard],
    },
  {path:"", pathMatch:"full",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"bid",component:BidComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
];

/*
const routes: Routes = [
  {path:"", pathMatch:"full",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:'bid',component:BidComponent},
  {path:'mensalidade',component:MensalidadeComponent}, 
  {path:'login',component:LoginComponent},
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
