import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BannerMainComponent } from "./banner-main/banner-main.component";
import { FooterComponent } from "./footer/footer.component";
import { MinicartComponent } from './minicart/minicart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    BannerMainComponent,
    FooterComponent,
    MinicartComponent
  ],
  declarations: [NavComponent, BannerMainComponent, FooterComponent, MinicartComponent]
})
export class SharedModule { }
