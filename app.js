var q1 = document.getElementsByName('q1');
var q2 = document.getElementsByName('q2');
var q3 = document.getElementsByName('q3');
var q4 = document.getElementsByName('q4');
var q5 = document.getElementsByName('q5');
var q6 = document.getElementsByName('q6');
var q7 = document.getElementsByName('q7');
var yourScore;

var score = 0;

function theirScore (){
  	if (score <= 3){
  		yourScore = alert('You have less then 3 points');
  	}
  	else if(score <= 5){
  		yourScore = alert('You have less than 5 points');
  	}
  	else{
  		yourScore = alert('You have points greater than 5');
  	}
  }

function choose1 (){
 if( q1[0].checked === true){
   score+= 1;
 }
 if(q2[0].checked === true){
 	score+= 1;
 }
 if(q3[0].checked === true){
 	score+= 1;
 }
 if(q4[0].checked === true){
 	score+= 1;
 }
 if(q5[0].checked === true){
 	score+= 1;
 }
 if(q6[0].checked === true){
 	score+= 1;
 }
 if(q7[0].checked === true){
 	score+= 1;

 }
   
  else{
    yourScore = alert(score);
  }
  theirScore();
  
}




