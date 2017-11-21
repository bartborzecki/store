import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductsListComponent],
  declarations: [ProductsListComponent]
})
export class StoreModule { }
