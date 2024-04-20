import { Routes } from '@angular/router';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';

export const routes: Routes = [
    {path:'', component: ListProductsComponent},
    {path:'add', component: AddEditProductComponent},
    {path:'edit/:id', component: AddEditProductComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
 