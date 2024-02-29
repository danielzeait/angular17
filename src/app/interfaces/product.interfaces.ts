export interface Rate {
    count:number | null,
    rate:number | null,
}

export interface Product {
    id:number,
    title:string,
    price:number | null,
    category:string,
    description:string,
    image:string,
    rating: Rate,
    showBackground:boolean,
    stock:number
}
