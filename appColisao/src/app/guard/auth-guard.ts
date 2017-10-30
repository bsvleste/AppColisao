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
        if(this.authService.usuarioLogado())
        {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
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
       return this.verificaAcesso();
    }
}