import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[] = [];
  private cartSubscription: Subscription | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.cartSubscription = this.productService.getCart().subscribe((cart) => {
      console.log(cart);
      this.cart = cart;
    });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
