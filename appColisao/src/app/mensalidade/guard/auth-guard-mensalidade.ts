import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../login/auth-service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardMensalidade implements CanActivate,CanLoad 
{
    constructor(private authService:AuthService, private router: Router){}
    
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
        if(this.authService.usuarioPermi())
        {
            console.log("logado auth Menslaidade");
            
            return true;
        }
        console.log("deslocago menslaidade");
        this.router.navigate[('/login')];
        return false;
    }    
}