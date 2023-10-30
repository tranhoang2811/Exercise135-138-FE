import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  public products: IProduct[] = [];
  public errorMessage: string = '';

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
