import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductBoardComponent } from './product-board/product-board.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DailyNeedsComponent } from './daily-needs/daily-needs.component';
import { HomeFurnitureComponent } from './home-furniture/home-furniture.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothesComponent } from './clothes/clothes.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: '', component: ProductBoardComponent },
    { path: 'dailyneeds', component: DailyNeedsComponent },
    { path: 'furniture', component: HomeFurnitureComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'clothes', component: ClothesComponent },
    { path: 'electronics', component: ElectronicsComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Making array of the components
export const routingComponents = [MainComponent, ProductComponent,
 ProductCardComponent, ProductBoardComponent, FooterComponent,
 SlideshowComponent, DailyNeedsComponent, HomeFurnitureComponent, 
 LoginComponent, SignupComponent, ElectronicsComponent, ClothesComponent, CartComponent]