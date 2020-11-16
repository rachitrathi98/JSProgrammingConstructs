var numberToWords = require('number-to-words');
console.log(numberToWords.toWords(13));
let weekDayNum=3;
let result="";
if ( weekDayNum == 1 ) {
    result = "Sunday";
} else if ( weekDayNum == 2 ) {
    result = "Monday";
} else if ( weekDayNum == 3 ) {
    result = "Tuesday";
} else if ( weekDayNum == 4 ) {
    result = "Wednesday";
} else if ( weekDayNum == 5 ) {
    result = "Thursday";
} else if ( weekDayNum == 6 ) {
    result = "Friday";
} else if ( weekDayNum == 7 ) {
    result = "Saturday";
} else if ( weekDayNum == 0 ) {
    result = "Sunday";
} else {
    result = "ERROR";
}
console.log(result);