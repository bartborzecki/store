import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-main',
    templateUrl: './banner-main.html',
    styleUrls: ['./banner-main.less']
})

export class BannerMainComponent implements OnInit {

    bannerSrc: string = "../../assets/images/banner.jpg";

    constructor() { }

    ngOnInit() {

    }
}