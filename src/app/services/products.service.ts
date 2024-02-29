import { Injectable, inject  } from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable, delay, map } from "rxjs";
import { Product } from "../interfaces/product.interfaces";

@Injectable({
    providedIn:'root',
})
export class ProductService {
    
    private http:HttpClient = inject(HttpClient);

    constructor() {}
    
    public getAllProducts(): Observable<Product[]> {
        let url = `${environment.storeApiUrl}/products`;
        return this.http.get<Product[]>(url).pipe(
            map((products: Product[]) => {
                products.forEach((product: Product) => {
                    product.showBackground = false;
                    product.stock = Math.floor(Math.random() * 101);
                })
                return products
            }),
        );
    }

    public getProductsByCategory(category:string | null): Observable<Product[]> {
        let url = `${environment.storeApiUrl}/products/category/${category}`;
        return this.http.get<Product[]>(url).pipe(
            map((products: Product[]) => {
                products.forEach((product: Product) => {
                    product.showBackground = false;
                    product.stock = Math.floor(Math.random() * 101);
                })
                return products
            }),
        );
    }

    public getProductById(id:number | string): Observable<Product> {
        let url = `${environment.storeApiUrl}/products/${id}`;
        return this.http.get<Product>(url).pipe(
            //delay(1000),
            map((product: Product) => {
                product.stock = Math.floor(Math.random() * 101);
                return product
            }),
        );
    }
}
