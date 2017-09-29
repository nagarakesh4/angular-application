import { Component, OnInit } from '@angular/core';

@Component({
 //selector: 'pm-product-detail', //will be needed only if this component is being nested into another component (and not route change)
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
