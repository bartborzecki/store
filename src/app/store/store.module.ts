import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './products-list/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductsListComponent, ProductComponent],
  declarations: [ProductsListComponent, ProductComponent]
})
export class StoreModule { }
