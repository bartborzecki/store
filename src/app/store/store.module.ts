import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProductsListComponent],
  declarations: [ProductsListComponent]
})
export class StoreModule { }
