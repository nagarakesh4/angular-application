import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProuductGuardService } from './prouduct-guard.service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([ // routes are configured into forChild - ensures we dont register routing service provider second time
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProuductGuardService], component: ProductDetailComponent }
    ]),
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
