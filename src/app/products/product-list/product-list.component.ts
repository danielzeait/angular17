import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interfaces';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from '@shared/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TitleComponent, CommonModule, ModalDialogComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export default class ProductListComponent implements OnInit {

  private readonly router:Router = inject(Router);
  private readonly activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  private productService:ProductService = inject(ProductService);
  
  private destroySubscription$ = new Subject();
  
  public productList: Array<Product> = [];

  public categoryView:boolean = false;
  public showModal:boolean = false;
  public categoryName:string | null = null;
  public productQuickDeatilsData:Product | null = null;

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if(queryParams && queryParams['category']){
        this.categoryName = queryParams['category'];
        this.getProductsByCategory(); 
      }else{
        this.getAllProducts();
      }
    });
  }
  
  ngOnDestroy(){
    this.destroySubscription$.next(true);
    this.destroySubscription$.complete();
  }

  getProductsByCategory(){
    this.productService.getProductsByCategory(this.categoryName).pipe(
      takeUntil(this.destroySubscription$)
    ).subscribe((products)=>{
      this.productList = [...products];
      this.categoryView = true;
    })
  }

  getAllProducts(){
    this.productService.getAllProducts().pipe(
      takeUntil(this.destroySubscription$)
    ).subscribe((products) => {
      this.categoryView = false;
      this.productList = [...products];
    })
  }

  removeQueryParams(){
    this.router.navigate(
      [],
      {
        queryParams: {
          category: null,   // Remove category query param
        },
        queryParamsHandling: 'merge',
      }
    )
  }

  quickProductView(product: Product){
    this.showModal = true;
    this.productQuickDeatilsData = product;
  }

  viewProductDetails(product:Product){
    this.router.navigate(['../products', product.id], {relativeTo: this.activatedRoute});
  }

  toggleModalPreview(){
    this.showModal = !this.showModal;
  }
}
