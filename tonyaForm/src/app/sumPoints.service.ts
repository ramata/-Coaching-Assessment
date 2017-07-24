

export class SumPointsService{

  info: void;
	checkYes: boolean = false;
	checkNo: boolean = false;
	response1: boolean = false;
	response2: boolean = false;
	response3: boolean = false;
	score: number = 0;
	
  // onYes(){
  // 		   if( this.checkYes = true){
  //          this.score++;
  //          console.log(this.score); 
  //        }
              
  // }

  // onNo(){
  // 	this.checkNo = true;
  // 	this.score + 0;
  // 	console.log(this.score);
  // }

   scoreRecord(){

      if( this.checkYes){
        this.score++;
        this.checkYes = false;
        console.log(this.score)
      }
      else if( this.checkNo){
        this.score + 0;
        this.checkNo = false;
        console.log(this.score)
      }

    }


  userResponse(){

    if( this.score <= 3){
       this.response3 = true;
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

  disableButton(){
      if( this.checkYes && this.checkNo){
        console.log('Error, user chose too many options')
      }
      else if( this.checkYes || this.checkNo){
        this.userResponse();
      }
  }
  

}