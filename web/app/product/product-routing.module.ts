import {Routes, RouterModule} from "@angular/router";
import {ProductsAddComponent} from "./add/product.add.component";
import {NgModule} from "@angular/core";
import {ProductsComponent} from "./list/product.list.component";
import {ProductsViewComponent} from "./view/product.view.component";

const productRoutes: Routes = [
   {path: 'list', component: ProductsComponent},
  {path: 'detail/:id', component: ProductsViewComponent},

  {path: 'add', component: ProductsAddComponent},
  { path: '',
    redirectTo: '/add',
    pathMatch: 'full'
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
