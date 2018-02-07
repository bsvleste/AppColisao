import { CanDeactivate } from '@angular/router/src/interfaces';
import { Resolve } from '@angular/router/src/interfaces';
import { Component, NgModule } from '@angular/core';
import { MensalidadeComponent } from './mensalidade.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { patch } from 'webdriver-js-extender';
import { MesesComponent } from './meses/meses.component';
import { MensalidadeResolver } from './guard/mensalidade.resolve';

const mensalidadeRounting:Routes=[
    //adicionando rotas filhas
    {path:'',component:MensalidadeComponent,
        children:[
            {path:':id',component:MesesComponent,
                resolve:{mensalidade:MensalidadeResolver}
            }
            //{patch:':id/edit',component:MensalidadeForm,canDeactivate:[MensalidadeDiactivatedGuard]}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(mensalidadeRounting)],
    exports:[RouterModule]
})
export class MensalidadeRoutingModules{}