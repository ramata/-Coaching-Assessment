import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css']
})
export class Q6Component implements OnInit {

    constructor(private sumPointsService: SumPointsService) {}

	ngOnInit() {}

	chooseYes(){
	 this.sumPointsService.onYes();
	}
	chooseNo(){
	 this.sumPointsService.onNo();
	}
}
