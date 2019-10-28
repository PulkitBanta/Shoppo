import { Product } from '../product/product.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ProductBoardService {
    private products: Product[] = []

    constructor() {
        this.add("Electronics", '../../assets/electronics.jpg', '/electronics')
        this.add("Clothes", '../../assets/clothes.jpg', '/clothes')
        this.add("Daily Need", '../../assets/dailyNeed.jpg', '/dailyneeds')
        this.add("Furniture", '../../assets/furniture.jpg', '/homefurniture')
    }

    add(title: string, imgUrl: string, link: string) {
        const id = this.products.length
        const product = new Product(id, title, imgUrl, link)
        this.products.push(product)

        return product
    }

    getAll() {
        return this.products
    }
}