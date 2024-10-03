import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./pages/product/product.component";

export const PRODUCT_ROUTES: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductComponent,
    },
]