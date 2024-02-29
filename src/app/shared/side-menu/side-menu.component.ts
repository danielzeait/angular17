import { ChangeDetectionStrategy, Component, OnInit, effect, inject } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interfaces';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  providers:[UserService],
  imports: [RouterModule,NgOptimizedImage],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SideMenuComponent implements OnInit {
  private shared = inject(SharedService);
  public cartService = inject(CartService);
  public productsInCart:Product[] = [];
  newValue:number = 0;
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'))

  constructor(){
    effect(()=>{
      if(this.cartService.cartProducts()){
        this.productsInCart = this.cartService.cartProducts();
      }
    })
  }
  
  ngOnInit() {
    this.shared.getValue().subscribe({
      next: (value:number) => {
        this.newValue = value;
      },
      error: (error) => console.log('Error',error),
      complete: () => console.log('Complete'),
    });
  }

  showCart(){
    console.log('Current Cart', this.cartService.cartProducts());
  }

  clearCart(){
    this.cartService.clearCart();
    this.productsInCart = [];
  }

}
