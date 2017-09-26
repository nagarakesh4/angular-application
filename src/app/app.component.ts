//import component decorator from angular core to use in decorator
import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

//component decorator - Metadata
@Component({
  //selector - can be used as a directive
  selector: 'pm-root', //prefix with something (pm) to identify part of app, root represents the component
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div> Hello World Venkata's first Angular app (Component) </div>
      <pm-products></pm-products>
    </div>
  `,
  providers: [ ProductService ]
})

//component class
export class AppComponent{
  pageTitle: string = 'Angular Venkata';
}
