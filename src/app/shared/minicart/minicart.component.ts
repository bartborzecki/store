import {Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.less']
})
export class MinicartComponent implements OnInit {
  @Input() totalCost : number;

  ngOnInit() {
  }


}
