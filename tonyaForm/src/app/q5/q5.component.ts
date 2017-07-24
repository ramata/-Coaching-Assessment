import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css']
})
export class Q5Component implements OnInit {

  constructor(private sumPointsService: SumPointsService) {}

  ngOnInit() {}
  
}
