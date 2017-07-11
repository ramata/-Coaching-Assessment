var q1 = document.getElementsByName('q1');
var q2 = document.getElementsByName('q2');
var q3 = document.getElementsByName('q3');
var q4 = document.getElementsByName('q4');
var q5 = document.getElementsByName('q5');
var q6 = document.getElementsByName('q6');
var q7 = document.getElementsByName('q7');

console.log(q1, q2, q3);
// var url = q2[0].baseURI;
// console.log(url);
var yourScore;

var score = 0;

function theirScore (){
  	if (score <= 3){
  		yourScore = alert('You have less than 3 points');
  	}
  	else if(score <= 5){
  		yourScore = alert('You have less than 5 points');
  	}
  	else{
  		yourScore = alert('You have points greater than 5');
  	}
  }

function questionCounter(){
  score+=1
  return score
}
function choose1 (){
  // history.pushState(null, null, url);
   // if( q1[0].checked === true){
   questionCounter();   
 // }

}

// console.log(questionCounter);

function choose2 (){
	// if(q2[0].checked === true){
 	questionCounter();
 // }
}

function choose3 (){
// 	 if(q3[0].checked === true){
 	questionCounter();
  console.log(score);
//  }
}
// function choose4 (){
//  if(q4[0].checked === true){
//  	questionCounter(score);
//  }
// }

// function choose5 (){
// 	if(q5[0].checked === true){
//  	questionCounter(score);
//  }
// }

// function choose6 (){
// 	if(q6[0].checked === true){
//  	questionCounter(score);
//  }
// }
 
// function choose7 (){
// 	if(q7[0].checked === true){
//  	questionCounter(score);
//   console.log(score);
//  	// theirScore();
//  }
// }
   
