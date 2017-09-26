import { Component, OnInit } from '@angular/core'
import { IProduct } from './iProduct'
import { ProductService } from './products.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;

    //setters and getter for list filter (ngModel two way data binding)
    get listFilter(): string{   //when the data binding needs the value
        return this._listFilter;
    }
    set listFilter(value: string){ //everytime user modifies the value, data binding calls the setter
        this._listFilter = value;
        //perform logic when the value is changed => filter the products
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    //filtered list of products
    filteredProducts: IProduct[];

    //declare the products array
    products: IProduct[] = [];

    //all functions are under properties
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    // is executed after the constructor
    ngOnInit(): void{
        console.log(" on initialization of this component - OnInit");
        //retrieve data for template
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(msg: string): void{
        console.log(msg);
        this.pageTitle = "Rating Selected: " + msg;
    }

    //executed when component is first init before ngOnInit
    constructor(private _productService: ProductService){ //can work with public and private as well
        console.log("constructor with args");
        //this.listFilter = 'cart'; 
    }
}
