import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BannerMainComponent } from "./banner-main/banner-main.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    BannerMainComponent
  ],
  declarations: [NavComponent, BannerMainComponent]
})
export class SharedModule { }
