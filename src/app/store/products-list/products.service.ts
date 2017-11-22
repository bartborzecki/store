import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable()
export class ProductsService {
    public getProducts(): Product[] {
        return this.products();
    }

    private products(): Product[] {
        return <Product[]>[
            <Product>{id: 1, name: "Soccerball", price: 99.99, thumbnail: "../../assets/images/soccerball1.png"},
            <Product>{id: 2, name: "Basketball", price: 120, thumbnail: "../../assets/images/basketball1.png"},
            <Product>{id: 3, name: "Basketball Light", price: 22.6, thumbnail: "../../assets/images/basketball-light1.png"},
            <Product>{id: 4, name: "Basketball Light", price: 22.6, thumbnail: "../../assets/images/basketball-light1.png"},
            <Product>{id: 5, name: "Basketball Light", price: 22.6, thumbnail: "../../assets/images/basketball-light1.png"},
            <Product>{id: 6, name: "Basketball Light", price: 22.6, thumbnail: "../../assets/images/basketball-light1.png"}
        ];
    }
}