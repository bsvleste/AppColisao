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
    private verificaAcesso()
      { 
           if(this.authService.usuarioLogado())
           {
               return true;
           }
                this.router.navigate(['/login']);
                return false;        
    }
}