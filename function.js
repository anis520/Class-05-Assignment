

/**
 * Assignment 1
 * Create a function 
 * that will return 
 * children, teenagers, young people, old people
 *  from the age 
 */



let agecal = (naam,age) => {

       if(age<=5 && age>0){
           return`Hello ${naam}.Your are a children`
       }else if(age<=10&&age>5){
                 return`Hello ${naam}.Your are a teenger`
       }else if(age<18&&age>10){
                 return`Hello ${naam}.Your are a adderd`
       }else if(age<=18&&age>30){
                 return`Hello ${naam}.Your are a joobok`
       }else if(age<=30&&age>50){
                 return`Hello ${naam}.Your are a Ancle`
       }
    

}





/**
 * Assignment 2
 * Create a function
 * That will return the area
 * Of a rectagle , square , triangle
 */


const Areacal = (Name,a,b) =>{
       Area=0
       Aname='';

        if(Name == 'r'){
             Aname='Rectangle'
             Area=(a*b)
       }else if (Name == 's'){
             Aname='Square'
             Area=(a*a)
      }else if(Name=='t'){
          Aname='Triangle'
          Area=(.5*a*b)
      }

      console.log(`${Aname} Area = ${Area}`)

}





/**
 * Assignment 3
 * GPA, CGPA, GRADE function 
 * For result publishing
 */ 


const gpaGradCal= (mark) => {
      
           let grade='';
           let gpa='';

  if(mark>0 && mark <33){
    grade='F' 
    gpa= '0'        
  }else if(mark>33 && mark <40){     
    grade='D' 
    gpa= '1'
  }else if(mark>=40 && mark <50){
     grade='C' 
     gpa= '2'  
  }else if(mark>=50 && mark <60){
     grade='B' 
     gpa= '3'
   }else if(mark>=60 && mark <70){
     grade='A-' 
     gpa= '3.5' 
    }else if(mark>=70 && mark <80){
     grade='A' 
     gpa= '4'     
   }else if(mark>= 80&& mark<=100){
     grade='A+' 
     gpa= '5'
   }else{console.log('your got invalied number ')}
  
   if(gpa==0){
              console.log( `your are fale,your grad is ${grade} And your gpa is ${gpa}`);
    }else{
              console.log( `your are pass ,your grad is ${grade} And your gpa is ${gpa}`);
       }
       
  }





/**
 * Assignment 4
 * Create an age  calculator function 
 */





const birtYear = (sal) =>{

  console.log(`Your Age is  ${2022-sal}`);
  
}






/**
 *Asignment 5  
 *Create a BMI function for health
 */





const bmical= (a,b) => {

         let feetToMeter= b*.3048
         let hEight= feetToMeter*feetToMeter
         let  bmi = a/hEight
     
     
     console.log(`Your bmi is = ${bmi}`);

  
}



/**
 *Asignment 6  
 * Create a currency converter function from taka to USD, CAD, POUND, EURO etc
 */







const curr = (a,b) => {
      
  let total= 0;


  switch(b){

       case 'usd':total = a/86.21
       break;
       case 'cad':total = a/69.02
       break;
       case 'pound':total = a/112.88
       break;
       case 'euro':total =a/94.24
       break;
  }

         console.log(`${amount} taka  = ${total} ${currency}`);

}