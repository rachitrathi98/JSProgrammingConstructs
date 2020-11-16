console.log("Single Digit: "+Math.floor(Math.random() * 10));//Get Single Digit 
console.log("Dice Num: "+Math.floor((Math.random()*1000)%6 +1)); //Random Number to get a dice between 1 to 6 
///3. Adding two random dice digit
let firstDiceDigit=Math.floor((Math.random()*1000))%6 +1;
let SecondDiceDigit=Math.floor((Math.random()*1000))%6 +1;
let sum = firstDiceDigit+SecondDiceDigit;
console.log("sum of two dice is : "+sum);
///4. Average Of Five Numbers
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 
let num=0;
let sumofNum=0;
for (var i = 0; i <5; i++) {
    num=randomNumber(10, 100) ;
    console.log(num);
    sumofNum+=num
  }
  console.log("Average is: "+sumofNum/5);
///5. Unit Conversion
let feetToInch = 12;
let convRatio = (1/feetToInch);
let numberOfInch = 42;
let numOfFeet = convRatio * numberOfInch;
console.log("Number of feet: " + numOfFeet);
let areaInFeet=2400;
let feetToMeter = 0.3048;
let areaInMeters= parseInt(areaInFeet*feetToMeter*feetToMeter);
console.log("Area in meters: "+areaInMeters);
areaInMeters= parseInt(areaInFeet*feetToMeter*25);
console.log("Area in meters for 25 plots:"+areaInMeters);
