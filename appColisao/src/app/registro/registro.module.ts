import { RegistroComponent } from './registro.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { RegistroRoutingModules } from './registro.routing.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RegistroRoutingModules
    ],
    exports:[],
    declarations:[RegistroComponent],
    providers:[{provide:LocationStrategy, useClass:HashLocationStrategy}
    ]
})
export class RegistroModule{}
