import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
})
export class Q1Component implements OnInit {
	info: void;
	checkYes: boolean = false;
	checkNo: boolean = false;
	score: number = 0;

  constructor(private sumPointsService: SumPointsService) {}

  ngOnInit() {}

  chooseYes(){
    this.sumPointsService.onYes();
  }
  chooseNo(){
    this.sumPointsService.onNo();
  }

 

}
