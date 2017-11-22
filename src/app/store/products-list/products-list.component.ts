import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {

  totalCost : number;
  products : Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.countTotalCost();
    this.products = this.productsService.getProducts();
  }

  countTotalCost() : void {
    this.totalCost = this.products
        .map((product) => product.price)
        .reduce((prev, next) => prev + next, 0);
  }

}
