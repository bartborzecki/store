import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  minicartEl : any;
  minicartShow : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMinicart() : void {

    this.minicartEl = document.getElementById('minicart');
    this.minicartShow = !this.minicartShow;

    if(this.minicartShow) {
      this.minicartEl.classList.add("show");
    } else {
      this.minicartEl.classList.remove("show");
    }
  }

}
