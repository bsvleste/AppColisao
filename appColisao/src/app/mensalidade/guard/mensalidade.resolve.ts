import { MesesServices } from './../services/meses.services';
import { Meses } from './../meses';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Promise } from 'q';

@Injectable()
export class MensalidadeResolver implements Resolve<Meses> {
    constructor(private mesesServices:MesesServices){}
    resolve(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
            let id = route.params['id'];
            return this.mesesServices.getMes(id);
        }   
}