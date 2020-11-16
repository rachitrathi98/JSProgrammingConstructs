//Check for Leap Year
function isLeap(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
} 
console.log(isLeap(2014));
console.log(isLeap(2016));
