import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path:'',component:NewProductComponent},
  {path:'single-product/:id',component:SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
