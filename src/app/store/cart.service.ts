import {Injectable} from '@angular/core';
import {Product} from "./models/product";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CartService {

    private productsInCart: Product[] = [];
    private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    constructor() {
        this.itemsInCartSubject.subscribe(_ => this.productsInCart = _);
    }

    public getProducts(): Product[] {
        return this.productsInCart;
    }

    public addProduct(product: Product): void {
        console.log(product);
        this.productsInCart.push(product);
    }
}