import { Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { Product } from '../../interfaces/product.interfaces';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export default class ProductDetailsComponent implements OnInit {

  public productDetails:Product | null = null;

  private readonly routedActivated:ActivatedRoute = inject(ActivatedRoute);
  private readonly productService:ProductService = inject(ProductService);
  private readonly cartService:CartService = inject(CartService);

  constructor(){}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.routedActivated.params.subscribe(params => {
      if(params && params['id']){
        this.productService.getProductById(params['id']).subscribe((product) => {
          this.productDetails = product;
        })
      }
    })
  }

  addProduct():void{
    this.cartService.addProductsToCart(this.productDetails);
  }

}
