import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { BidComponent } from './bid.component';
import { BidRoutingModule } from './bid.routing.module';

@NgModule({

    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        BidRoutingModule
    ],
    exports:[],
    declarations:[BidComponent],
    providers:[{provide: LocationStrategy, useClass:HashLocationStrategy}]
})
export class BidModule{}