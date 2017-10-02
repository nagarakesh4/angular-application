import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './iProduct';
import { ProductService } from './products.service';

@Component({
 //selector: 'pm-product-detail', //will be needed only if this component is being nested into another component (and not route change)
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: any;
  pageTitle: string = "Product Details";
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }
  //activated route instance is injected to components class - this is required to read the route parameter

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); //snapshot - the url will not change, observable if the id is coming from rest (next item)
    //+ to convert parameter string to integer
    this.pageTitle += `: ${id}`;
    // this.product = {
    //   "productId": id,
    //   "productName": "Leaf Rake",
    //   "productCode": "",
    //   "releaseDate": "",
    //   "description": "",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": ""
    // }
    this.getProduct(id);
  }

  getProduct(id: number){
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void{
    this._router.navigate(['/products'])
  }

}
