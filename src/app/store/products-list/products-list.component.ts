import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {

  totalCost : number;
  products : Product[] = [
    {
      id: 1,
      name: "Soccerball",
      price: 99.99,
      thumbnail: "../../assets/images/soccerball1.png"
    },
    {
      id: 2,
      name: "Basketball",
      price: 120,
      thumbnail: "../../assets/images/basketball1.png"
    },
    {
      id: 3,
      name: "Basketball Light",
      price: 22.6,
      thumbnail: "../../assets/images/basketball-light1.png"
    },
    {
      id: 4,
      name: "Basketball Light",
      price: 22.6,
      thumbnail: "../../assets/images/basketball-light1.png"
    },
    {
      id: 5,
      name: "Basketball Light",
      price: 22.6,
      thumbnail: "../../assets/images/basketball-light1.png"
    },
    {
      id: 6,
      name: "Basketball Light",
      price: 22.6,
      thumbnail: "../../assets/images/basketball-light1.png"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.countTotalCost();
  }

  countTotalCost() : void {
    this.totalCost = this.products
        .map((product) => product.price)
        .reduce((prev, next) => prev + next);
  }

}
