import { Usuario } from './../login/usuario';
import { AuthService } from './../login/auth-service';
import { Injectable } from "@angular/core";
import { CanActivate, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';

@Injectable()
export class AuthGuard implements  CanLoad,CanActivate

{
    constructor(private authService: AuthService, private router: Router) { }
    
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.verificaAcesso();
    }
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
    {

   
        return this.verificaAcesso();
    }
   /* private verificaAcesso()
      { 
           if(this.authService.usuarioLogado())
           {
               return true;
           }
                this.router.navigate(['/login']);
                return false;        

                if(localStorage.currentuser === undefined)
        {
          console.log("nao ha localstorage");
          if(this.authService.usuarioLogado())
          {
              return true;
          }
          this.router.navigate(['/login']);
          return false;
       }else{
          console.log("ha localstorage");
          let local = localStorage.getItem('currentuser');
          let per = JSON.parse(local);
          if(per[0].perm == 1 )
          {
            return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        }
    }*/
    private verificaAcesso()
    {
        if(this.authService.usuarioLogado())
        {
            console.log("logado");
            return true;
        }
        console.log("deslogado");
        this.router.navigate[('/login')];
        return false;
    }
    /*canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean>
    {
       console.log("verificnado usario");
       //pega os dados do localstorage
      
        if(localStorage.currentuser === undefined)
        {
          console.log("nao ha localstorage");
          if(this.authService.usuarioLogado())
          {
              return true;
          }
          this.router.navigate(['/login']);
          return false;
       }else{
          console.log("ha localstorage");
          let local = localStorage.getItem('currentuser');
          let per = JSON.parse(local);
          if(per[0].perm == 1 )
          {
            return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        }
    }*/
     
}