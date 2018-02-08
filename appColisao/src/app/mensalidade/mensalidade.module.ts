import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { MensalidadeResolver } from './guard/mensalidade.resolve';
import { MesesServices } from './services/meses.services';
import { MensalidadeRoutingModules } from './mensalidade.routing.modules';
import { MensalidadeDiactivatedGuard } from './mensalidade.diactivated.guard';
import { MesesComponent } from './meses/meses.component';
import { MensalidadeComponent } from './mensalidade.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        MensalidadeRoutingModules
    ],
    exports:[],
    declarations:[MesesComponent,MensalidadeComponent],
    providers:[
        MesesServices,
        MensalidadeDiactivatedGuard,
        MensalidadeResolver,
    ]
})
export class MensalidadeModule{}
