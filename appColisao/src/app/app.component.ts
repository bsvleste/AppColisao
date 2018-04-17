import { AuthService } from './login/auth-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  mostraMenu:boolean = false;
  admPermissao:boolean = false;
  constructor(private authService:AuthService, private router:Router){}
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
    return this.mostraMenu = false;        
    
  }
  clearLocal()
  {
    console.log("limpando o localstorage");
    window.localStorage.clear();
   }

}
