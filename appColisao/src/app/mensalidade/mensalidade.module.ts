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

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
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
