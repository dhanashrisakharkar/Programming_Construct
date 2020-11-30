console.log("Welcome to Assignment of If Else If");
let number1 = Math.floor(Math.random()*999) ;
let number2 = Math.floor(Math.random()*999) ;
let number3 = Math.floor(Math.random()*999) ;
let number4 = Math.floor(Math.random()*999) ;
let number5 = Math.floor(Math.random()*999) ;
console.log(number1+","+number2+","+number3+","+number4+","+number5);
if(number1>number2&&number1>number3&&number1>number4&&number1>number5)
{
    console.log("It is an maximum value"+number1);
}
else if(number2>number3&&number2>number4&&number2>number5)
{
    console.log("It is an maximum value"+number2);

}
else if(number3>number4&&number3>number5)
{
    console.log("It is an maximum value"+number3);
}else if(number4>number5)
{
    console.log("It is an miximum value"+number4);
   
}
else if(number5)
{
    console.log("It is an maximun value"+number5);
}
if(number1<number2&&number1<number3&&number1<number4&&number1<number5)
{
    console.log("it is minimun no"+number1);

}
else if(number2<number3&&number2<number4&&number2<number5)
{
    console.log("It is an manimum value"+number2);

}
else if(number3<number4&&number3<number5)
{
    console.log("It is an minimum value"+number3);
}
else if(number4<number5)
{
    console.log("It is an minimum value"+number4);
    
}
else if(number5)
{
console.log("It is an minimum value"+number5);
}
