import { Usuario } from './../login/usuario';
import { AuthService } from './../login/auth-service';
import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad
{
    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
    {
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
    }
    private verificaAcesso()
    {
        if(this.authService.usuarioLogado())
        {
            return true;
        }
        this.router.navigate[('/login')];
        return false;
    }
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean>
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
    }
     
}