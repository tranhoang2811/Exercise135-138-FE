import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IProduct, IProductInCart } from '../interfaces/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>('/products')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public addToCart(product: IProduct): Observable<void> {
    return this.httpClient
      .post<void>('/products/add-to-cart', product)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getCart(): Observable<IProductInCart[]> {
    return this.httpClient
      .get<IProductInCart[]>(`/products/cart`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public updateCart(cart: IProductInCart[]): Observable<void> {
    return this.httpClient
      .put<void>(`/products/cart`, cart)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
