 let minNo=1
    let maxNo=100
    let midNo=0
    while ( minNo <= maxNo ){
        midNumber=parseInt( (minNo+maxNo)/2 );
        console.log("Middle No is : "+midNo);
        i=prompt("Enter your option :");
        if(i === 'l')
            maxNo=midNo;
        else if (i === 'g')
            minNo=midNo;
        else if (i === 'e'){
            console.log("Your magic number is :"+midNo);
            break;
        }
        else
            console.log("Error")
    }
