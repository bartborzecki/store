import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BannerMainComponent } from "./banner-main/banner-main.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    BannerMainComponent,
    FooterComponent
  ],
  declarations: [NavComponent, BannerMainComponent, FooterComponent]
})
export class SharedModule { }
