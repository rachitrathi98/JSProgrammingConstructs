   //Convert one unit to another
   let n = 3;
    switch(n)
    {
        case 1:
            console.log("Enter feets to convert to inches");
            let feet= 10;
            console.log("Inches are: "+feet*12);
            break;
        case 2:
            console.log("Enter inches to convert to feets");
            let inches= 24;
            console.log("Feets are: "+inches/12);
            break;
        case 3:
            console.log("Enter meters to convert to feet");
            let meters= 3.28084;
            console.log("Feets are: "+meters*3.28084);
            break;
         case 4:
            console.log("Please enter feets to be converted to meters");
            let feets= 3.28084;
             console.log("Meters are: "+feets/3.28084);
             break;
        default:
            console.log("Incorrect Input");
            break;
    }
