var n1= prompt("Enter a number:");
var n2= prompt("Enter a number:");
n1=parseFloat(n1)
n2=parseFloat(n2)

var sum= n1+n2;
var sub= n1-n2;
var mul= n1*n2;
var div= n1/n2;
var mod= n1%n2;

document.write(n1+" + "+ n2 + " = "+sum+"</br>");
document.write(n1+" - "+ n2 + " = "+sub+"</br>");
document.write(n1+" x "+ n2 + " = "+mul+"</br>");
if(n2!=0)
    {document.write(n1+" / "+ n2 + " = "+div+"</br>");
    document.write(n1+" % "+ n2 + " = "+mod+"</br>");}
else
    {document.write("Math error for division"+"</br>");
    document.write("Math error for modulous"+"</br>");}



