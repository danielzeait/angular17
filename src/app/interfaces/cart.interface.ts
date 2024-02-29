import { Product } from "./product.interfaces";

export interface Cart {
    products:Product[];
    subTotal:number;
    tax:number;
    total:number;
}