import { Component } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {User} from "../models/user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products : Product[] = [];
  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    if(this.products.length === 0) {
      this.products = this.productService.getProducts();
    }
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
    alert("Producto agregado");
  }
}
