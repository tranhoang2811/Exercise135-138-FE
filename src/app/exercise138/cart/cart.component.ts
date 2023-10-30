import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductInCart } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { omit } from 'lodash';

// *INFO: Handle product manually as the form array difficult to use
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public cart: IProductInCart[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.productService.getCart().subscribe({
      next: (cart: IProductInCart[]) => {
        this.cart = cart.map((product: IProductInCart) => {
          return { ...product, isRemoved: false };
        });
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  public continueShopping(): void {
    this.router.navigate(['/exercise-138']);
  }

  public checkRemoveProduct(index: number): void {
    this.cart[index].isRemoved = !this.cart[index].isRemoved;
  }

  public onQuantityChange(event: Event, index: number): void {
    const value = (event.target as HTMLInputElement).value;
    this.cart[index].quantity = parseInt(value);
  }

  public updateCart(): void {
    const payload = this.cart
      .filter((product: IProductInCart) => !product.isRemoved)
      .map((product: IProductInCart) => {
        return omit(product, ['isRemoved']);
      });

    this.productService.updateCart(payload).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }
}
