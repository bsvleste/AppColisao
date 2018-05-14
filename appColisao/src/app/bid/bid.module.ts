import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BidComponent } from './bid.component';
import { BidRoutingModule } from './bid.routing.module';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

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
    providers:[
        AngularFireDatabase,
        {provide: LocationStrategy, useClass:HashLocationStrategy}
    ]
})
export class BidModule{}