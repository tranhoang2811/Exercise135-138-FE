import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise136Component } from './exercise136/exercise136.component';

const routes: Routes = [
  {
    path: 'exercise-136',
    component: Exercise136Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
