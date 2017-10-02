import { Injectable } from "@angular/core";
import { IProduct } from "./iProduct";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";

//to handle side effects of do and catch
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{

    private _getProductsApiURL = './api/products/products.json';

    constructor (private _httpClient: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this._httpClient.get<IProduct[]>(this._getProductsApiURL)
        .do( data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct>{
        return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

