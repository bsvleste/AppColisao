import { CanDeactivate } from '@angular/router/src/interfaces';
import { Resolve } from '@angular/router/src/interfaces';
import { Component, NgModule } from '@angular/core';
import { MensalidadeComponent } from './mensalidade.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MesesComponent } from './meses/meses.component';
import { MensalidadeResolver } from './guard/mensalidade.resolve';
import { MensalidadeFormComponent } from './mensalidade-form/mensalidade-form.component';
import { MensalidadeDiactivatedGuard } from './mensalidade.diactivated.guard';

const mensalidadeRounting:Routes=[
    //adicionando rotas filhas
    {path:'',component:MensalidadeComponent,
        children:[
            {path:'edit', component:MensalidadeFormComponent},
            {path:':id',component:MesesComponent,
                resolve:{mensalidade:MensalidadeResolver}
            }           
        ]
    },
];

@NgModule({
    imports:[RouterModule.forChild(mensalidadeRounting)],
    exports:[RouterModule]
})
export class MensalidadeRoutingModules{}