//Check if Date is between March 20 and June 20
   let month= 'march'
    let day=20;
    if(month.toLowerCase() =='march' || month.toLowerCase() =='april' || month.toLowerCase() =='may' || month.toLowerCase() =='june' )
    {
        if(month.toLowerCase()=='march')
        {
            if(day>=20 && day<=31)
            {
                console.log('Date is Correct'); 
            }

        }
        else if(month.toLowerCase()=='June')
        {
            if(day>=1 && day<=20)
            {
                console.log('Date is Correct'); 
            }
 
        }
        else
        {
            if(day>=1 && day<=30)
            {
                console.log('Date is Correct'); 
            }
            console.log('Date is Incorrect');
        }
    }