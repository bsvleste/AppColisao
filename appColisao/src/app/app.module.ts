import { MesesServices } from './mensalidade/services/meses.services';
import { AuthService } from './login/auth-service';
import { AuthGuard } from './guard/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MensalidadeComponent } from './mensalidade/mensalidade.component';
import { HomeComponent } from './home/home.component';
import { ComponentErrorComponent } from './component-error/component-error.component';
import { MesesComponent } from './mensalidade/meses/meses.component';
import { MensalidadeGuard } from './guard/mensalidade.guard';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardMensalidade } from './mensalidade/guard/auth-guard-mensalidade';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ComponentErrorComponent,
    JogadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    
  ],
  providers: [AuthGuard,AuthService,MesesServices,MensalidadeGuard,AuthGuardMensalidade, {provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
