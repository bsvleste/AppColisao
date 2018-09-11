import { RegistroComponent } from './registro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const registroRounting:Routes=[
    //adicionando rotas filhas
    {path:'',component:RegistroComponent,
        /*children:[
            {path:'edit', component:MensalidadeFormComponent},
            {path:':id',component:MesesComponent,
                resolve:{mensalidade:MensalidadeResolver}
            }           
        ]*/
    },
];

@NgModule({
    imports:[RouterModule.forChild(registroRounting)],
    exports:[RouterModule]
})
export class RegistroRoutingModules{}