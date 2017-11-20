import {Component, OnInit, ElementRef} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.less']
})
export class MinicartComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  toggle(minicartEl) {
    if (minicartEl.classList.contains('show')) {
      minicartEl.classList.remove('show');
    } else {
      minicartEl.classList.add('show');
    }
  }

  hide(minicartEl) {
    if (minicartEl.classList.contains('show')) {
      minicartEl.classList.remove('show');
    }
  }



}
