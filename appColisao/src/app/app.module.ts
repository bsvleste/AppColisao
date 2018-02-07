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
import { BidComponent } from './bid/bid.component';
import { HomeComponent } from './home/home.component';
import { ComponentErrorComponent } from './component-error/component-error.component';
import { MesesComponent } from './mensalidade/meses/meses.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensalidadeComponent,
    BidComponent,
    HomeComponent,
    ComponentErrorComponent,
    MesesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard,AuthService,MesesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
