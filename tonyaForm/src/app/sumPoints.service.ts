

export class SumPointsService{

    info: void;
	checkYes: boolean = false;
	checkNo: boolean = false;
	response1: boolean = false;
	response2: boolean = false;
	response3: boolean = false;
	score: number = 0;
	// response1: any = document.getElementById('sevenPointsOrLess');
	// response2: any = document.getElementById('fourPointsOrLess');
	// response3: any = document.getElementById('threePointsOrLess');

	onYes(){
  		   // var add1 = 1;
           this.checkYes = true;
           this.score++;
           console.log(this.score); 
           console.log(this.response2);
  	  	 		
  }

  onNo(){
  	this.checkNo = true;
  	this.score + 0;
  	console.log(this.score);
  }

  userResponse(){

    if( this.score <= 3)
      {this.response3 = true;
      	console.log('hey');
    }
    else if(this.score <= 5 ){
    	this.response2 = true;
        console.log('jello');   
    }
    else{ 
    	this.response1 = true;
        console.log('hello'); 
    }
    

  }


// bothChecked(){
// 	if( checkYes = true && checkNo = true){
// 		routerLink = 'q1'
// 	}
// }
// var score: any = 0 ;
// var q1 = document.getElementsByName('q1');


	//  pointCounter () {
	//  	var question1 = document.getElementById('question1');
	//  	var q1 = <HTMLInputElement><any>document.getElementsByName('q1');
	//  	var q2 = document.getElementsByName('q2');
 //        var q3 =<HTMLInputElement><any> document.getElementsByName('q3');
 //        var q4 =<HTMLInputElement><any> document.getElementsByName('q4');
 //        var q5 =<HTMLInputElement><any> document.getElementsByName('q5');
 //        var q6 =<HTMLInputElement><any> document.getElementsByName('q6');
 //        var q7 =<HTMLInputElement><any> document.getElementsByName('q7');
	//  	var score = 0;
	//  	// var compare = q1[0] as true;
	//  	console.log('hello' );
	 	

	// //  	if(q1[0].checked === true){
	// // 		score+= 1;	 		             
	// // 		console.log(q2);

	// //  	}
	// //  	// if(q2[0].checked === true){
	// //  	// 	score+= 1;
	// //  	// 	console.log(score)
	// //  	// }
	// //  	else {
	// //  		score+= 0;
	// //  		console.log(score)
	// //  	}
	//  };


 }