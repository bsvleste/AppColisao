import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroComponent } from './cadastro.component';
import { FormCadComponent } from './form-cad/form-cad.component';
import { CadastroService } from './service/cadastro.service';

@NgModule({

    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        CadastroRoutingModule
    ],
    exports:[],
    declarations:[FormCadComponent,CadastroComponent],
    providers:[CadastroService,
        {provide:LocationStrategy, useClass:HashLocationStrategy}
    ]
})
export class CadastroModule{}