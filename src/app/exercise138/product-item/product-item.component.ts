import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { pick } from 'lodash';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: IProduct | undefined;

  constructor(private productService: ProductService) {}

  public addToCart(product: IProduct = {} as IProduct): void {
    this.productService
      .addToCart(pick(product, ['id', 'title', 'price', 'thumbnail']))
      .subscribe({
        next: () => {
          console.log('Added to cart');
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
