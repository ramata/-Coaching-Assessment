import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
})
export class Q2Component implements OnInit {


  constructor(public sumPointsService: SumPointsService) {}

  ngOnInit() {}

  
  
}
