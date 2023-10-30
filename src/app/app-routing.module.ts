import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise136Component } from './exercise136/exercise136.component';
import { CartComponent } from './exercise138/cart/cart.component';
import { ProductListComponent } from './exercise138/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'exercise-136',
    component: Exercise136Component,
  },
  {
    path: 'exercise-138',
    component: ProductListComponent,
  },
  {
    path: 'exercise-138/cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
