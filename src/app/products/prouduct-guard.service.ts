import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProuductGuardService implements CanActivate {
  constructor(private _route: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    console.log(route);
    let id = +route.url[1].path; //route.url is comprised of product and idas /product/5, extract id by [1]
    //allow only id of non zero and numerics
    if(isNaN(id) || id < 1){
      alert('invalid product id entered');
      this._route.navigate(['/products'])
      return false;
    }
    return true;
  }

}
