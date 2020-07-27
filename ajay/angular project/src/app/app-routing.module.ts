import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  
  {path:'product',component:ProductComponent},
  {path:'product-view',component:ProductViewComponent},
  {path:'product-edit',component:ProductEditComponent},
  {path:'product-update',component:ProductUpdateComponent},
  {path:'order/:id',component:OrderViewComponent},
  {path:'search',component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
