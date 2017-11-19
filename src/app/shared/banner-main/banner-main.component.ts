import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-main',
    templateUrl: './banner-main.component.html',
    styleUrls: ['./banner-main.component.less']
})

export class BannerMainComponent implements OnInit {

    bannerSrc: string = "../../assets/images/banner.jpg";

    constructor() { }

    ngOnInit() {

    }
}