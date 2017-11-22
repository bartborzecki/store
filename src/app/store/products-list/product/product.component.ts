import { Component, OnInit, Input } from '@angular/core';
import {CartService} from "../../cart.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  providers: [CartService]
})
export class ProductComponent implements OnInit {


  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public thumbnail: string;
  @Input() public productObj: string;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }


  addProduct(product: Product): void {
    this.cartService.addProduct(product);
  }
}
