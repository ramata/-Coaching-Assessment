import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SumPointsService } from '../sumPoints.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
})
export class Q1Component implements OnInit {


  constructor(public sumPointsService: SumPointsService) {}

  ngOnInit() {}

  // chooseYes(){
  //   this.sumPointsService.onYes();
  // }
  // chooseNo(){
  //   this.sumPointsService.onNo();
  // }

 

}
