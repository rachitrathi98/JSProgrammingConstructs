//Find maximum and minumm from 5 random 3 digit values
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 
let num=0;
let sumofNum=0;
var numbers = new Array();
for (var i = 0; i <5; i++) {
    num=randomNumber(100,1000);
    console.log(num);
    numbers[i]=num;
  }
var min = Math.min.apply(null, numbers),
    max = Math.max.apply(null, numbers);
    console.log("The minimum number is: ",min);
    console.log("The maximum number is: ", max);


    
