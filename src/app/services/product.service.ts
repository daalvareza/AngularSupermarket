import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import productData from "../../assets/database/products.json";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = productData.products;
  private cart = new BehaviorSubject<Product[]>([]);

  constructor() {}

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart.asObservable();
  }

  addToCart(product: Product) {
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, product]);
    console.log(this.cart.getValue());
  }
}
