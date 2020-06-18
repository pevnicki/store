import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import {MainPaigeComponent} from './main-paige/main-paige.component';
import {AdminModule} from './admin/admin.module';



const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: MainPaigeComponent},
    {path: 'product/:id', component: ProductPageComponent},
    {path: 'cart', component: CartPageComponent}
  ]
},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
