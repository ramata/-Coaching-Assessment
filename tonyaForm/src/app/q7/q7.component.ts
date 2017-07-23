import { Component, OnInit } from '@angular/core';
import { SumPointsService } from '../sumPoints.service';


@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css']
})
export class Q7Component implements OnInit {


  constructor(private sumPointsService: SumPointsService) {}

  ngOnInit() {}

  chooseYes(){
   this.sumPointsService.onYes();
  }
  chooseNo(){
   this.sumPointsService.onNo();
  }

  usersResponse(){
    this.sumPointsService.userResponse();
  }

  


}
