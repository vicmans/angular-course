import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./pages/product/product.component";
import { inject } from "@angular/core";
import { ProductService } from "./data/product.service";
import { productResolver } from "./data/product.resolver";

export const PRODUCT_ROUTES: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductComponent,
        resolve: {
            // product: (route: ActivatedRouteSnapshot) => {
            //     const id = route.paramMap.get('id');
            //     console.log('resolve ', id)
            //     const productService = inject(ProductService);
            //     return productService.findById(Number(id))
            // },
            // Changed by the tested productResolver
            product: productResolver,
        }
    },
]