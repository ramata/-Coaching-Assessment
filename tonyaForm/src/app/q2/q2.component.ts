import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
})
export class Q2Component implements OnInit {

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
