import { Injectable, signal, } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../interfaces/product.interfaces";

@Injectable({
    providedIn:'root',
})
export class CartService {

    value$ = new BehaviorSubject<number>(0);
    cartProducts = signal<Product[]>([]);

    constructor(){}

    addProductsToCart(product:Product | null):void {
        if(product && this.notProductInCartByID(product.id)){
            this.cartProducts.update(() => [...this.cartProducts(), product]);
        }
    }

    notProductInCartByID(id:number):Boolean{
        const findProduct = this.cartProducts().find(product => product.id === id);
        return findProduct === undefined;
    }   

    getCartProducts():Product[] {
        return this.cartProducts();
    }

    removeProductFromCart(product:Product):void {
        this.cartProducts.update(() => this.cartProducts().filter(p => p.id!== product.id));
    }

    clearCart():void {
        this.cartProducts.update(() => []);
    }
}
