import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css']
})
export class Q7Component implements OnInit {


  constructor(public sumPointsService: SumPointsService) {}

  ngOnInit() {}

  usersResponse(){
    this.sumPointsService.userResponse();
  }
  
}
