import {Component, OnInit , Input} from '@angular/core';
import {Product} from "../../store/models/product";
import {CartService} from "../../store/cart.service";

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.less'],
  providers: [CartService]
})
export class MinicartComponent implements OnInit {
  @Input() totalCost : number;

  public productsInCart: Product[] = [];

  constructor(private cartService: CartService) {
    this.productsInCart = this
        .cartService
        .getProducts();
  }

  ngOnInit() {
  }

}
