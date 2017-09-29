//import component decorator from angular core to use in decorator
import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

//component decorator - Metadata
@Component({
  //selector - can be used as a directive
  selector: 'pm-root', //prefix with something (pm) to identify part of app, root represents the component
  template: `
    <div>
      <nav class='navbar navbar-default'>
          <div class='container-fluid'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/welcome']">Home</a></li>
                  <li><a [routerLink]="['/products']">Product List</a></li>
              </ul>
          </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  providers: [ ProductService ]
})

//component class
export class AppComponent{
  pageTitle: string = 'Angular Venkata';
}
