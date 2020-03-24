import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/products';
import { CartService } from '../cart/cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  cartService: any;
  product;

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
    // constructor(
    //   private route: ActivatedRoute,
    //   private cartService: CartService
    // ) { }
    // addToCart(product) {
    //   this.cartService.addToCart(product);
    //   window.alert('Your product has been added to the cart!');
     }
  

   


