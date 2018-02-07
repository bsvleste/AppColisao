import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router/src/interfaces";
import { RouterState } from '@angular/router/src/router_state';
import { IFormCanDeactivate } from '../guard/iform-candeactivated-guard';

@Injectable()
export class MensalidadeDiactivatedGuard implements CanDeactivate<IFormCanDeactivate>
{
    canDeactivate(component: any,
                    route:ActivatedRouteSnapshot,
                    state:RouterStateSnapshot                  
    ):Observable<boolean> | Promise<boolean> {
        return component.podeDesativar();
    }
    
}