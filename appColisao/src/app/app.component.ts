import { AuthService } from './login/auth-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('window-size') myWindow: ElementRef;
  @ViewChild('screen-size') myScreen: ElementRef;
  title = 'app';
  mostraMenu:boolean = false;
  admPermissao:boolean = false;
  constructor(private authService:AuthService, private router:Router, public authFirebase:AngularFireAuth){}
  ngOnInit()
  {
    //mantem o usuario logado no locastorage
    //if(localStorage.getItem('currentuser'))
    //{
      /*this.authService.usuarioAutenticado = true;
      this.mostraMenu = true;
      
    }*/   
    this.authService.mostraMenuEmmiter.subscribe(
      mostrar => this.mostraMenu = mostrar
    );
    this.authService.permissaoMenu.subscribe(
      permiMenu => this.admPermissao = permiMenu
    );    
  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  if(localStorage.currentuser)
    {
         console.log("vwerdade");
         let local = localStorage.getItem('currentuser');
         let per = JSON.parse(local);
         if(per[0].perm == 1)
         {
           console.log(per[0].perm);
           this.admPermissao = this.authService.usuarioPermissao = true;
           this.mostraMenu = this.authService.mostraMenu = true;
          }else{
            this.authService.usuarioPermissao = false;
            this.mostraMenu = this.authService.mostraMenu = true;
          }  
    //this.authService.fazerLogin(per);
     //return true;
   /* this.authService.mostraMenuEmmiter.subscribe(
      mostrar => this.mostraMenu = mostrar
    );
    this.authService.permissaoMenu.subscribe(
      permiMenu => this.admPermissao = permiMenu
    );*/    
     
  }
             
  }
  loggof()
  {
    this.clearLocal();
    this.router.navigate(['/login']);
    /*logoff do firebase
    this.authFirebase.auth.signOut().then(function() {
      // Sign-out successful.
      console.log("Você não esta logado");
      	
    }).catch(function(error) {
      // An error happened.
      console.log(error.code);
      console.log(error.message);
      alert("Falha ao cadastra , verifique o erro no console");
    });
    */
    return this.mostraMenu = false;      
  }
  clearLocal()
  {
    console.log("limpando o localstorage");
    window.localStorage.clear();
   }
}
