import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { MaterialExampleModule } from './material.module';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductCartComponent,
  ],
  imports: [
  BrowserModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'checkout', component: ProductCartComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
