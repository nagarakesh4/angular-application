import { Component, OnInit } from '@angular/core'
import { IProduct } from './iProduct'

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

    //setters and getter for list filter
    get listFilter(): string{   //when the data binding needs the value
        return this._listFilter;
    }
    set listFilter(value: string){ //everytime user modifies the value, data binding calls the setter
        this._listFilter = value;
        //perform logic when the value is changed => filter the products
        console.log(this.listFilter);
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        console.log(this.performFilter(this.listFilter));
        console.log(this.filteredProducts);
    }

    //filtered list of products
    filteredProducts: IProduct[];

    //declare the products array
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
    ];

    //all functions are under properties
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log(" on initialization of this component - OnInit");
    }

    performFilter(filterBy: string): IProduct[] {
        console.log("filteign by " + filterBy);
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //executed when component is first init
    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
}
