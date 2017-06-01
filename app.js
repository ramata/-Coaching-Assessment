var q1 = document.getElementsByName('q1');

var score = 0;
 

function choose1 (){
  // for(var i =0; i < userResponse.length; i++){
 if( q1[0].checked === true){
   score+= 1;
  console.log(score);
 }
   else if( q1[1].checked === true){
    console.log(score);
  }
  else{
    console.log('you')
  }
// }
  
}

console.log(choose1);
