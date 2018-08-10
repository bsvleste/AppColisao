import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { FormCadComponent } from './form-cad/form-cad.component';
const cadastroRounting:Routes = [
    //add rota filhas
    {
        path:'', component:CadastroComponent,        
        children:[
            {path:'cadastrar', component:FormCadComponent},
            {path:'edit',component:FormCadComponent},
            {path:'edit/:id',component:FormCadComponent,
            //resolve:{mensalidade:MensalidadeResolver}
            }]
    }
];
@NgModule({
    imports:[RouterModule.forChild(cadastroRounting)],
    exports:[RouterModule]
})
export class CadastroRoutingModule{}