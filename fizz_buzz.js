/* 
 goal : if the output is divisble by 3 write fizz,
 if it is divisible by 5 write buzz 
 if the outlput is divisble by both 3 and 5 write fizzbuzz on the array 

*/

var output = []; 
var count = 1; 

function fizzBuzz() { 
  if (count % 3 === 0 && count % 5 ) { 
  output.push ('fizzbuzz')
  }
     else if (count % 3 === 0){ 
          output.push ('Fizz'); 
      }
    else if (count  %5  === 0){ 
    output.push('Buzz'); 
    }
    else { 
    output.push (count); 
        
    } 
    
}
fizzBuzz();