import { AuthService } from './../login/auth-service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MensalidadeGuard implements CanActivateChild
{
    constructor(private authService:AuthService){}

    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
    {
        
        /*if(state.url.includes('edit'))
        {
            return false;
        }*/
        return true;
    }

    
}