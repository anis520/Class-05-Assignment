
// Create a function that will return the area of a rectangle, square, triangle 


      let  Area  = prompt('What area will you find out  Rectangle =>\'r\', Square =>\'r\', Triangle =>\'r\'?')



      if(Area == 'r'){

        let  weight = parseFloat(prompt('Give me Rectangle weight => '))
        let  length = parseFloat(prompt('Give me Rectangle length => '))

        Areacal(Area,weight,length);

        
        
      }else if(Area =='t'){

         let base = parseFloat(prompt('Give me Triangle Base =>')) 
         let  height= parseFloat(prompt('Give me Triangle Height =>')) 
         
        
        Areacal(Area,base,height)

      }else if (Area == 's'){

        let  side = parseFloat(prompt('Give me Square side => '))
      

        Areacal(Area,side)

      }else{alert('please take some of area ');}
        
      