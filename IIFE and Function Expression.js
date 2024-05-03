//IIFE(Immidiately Invokable Function Expression)

(function (msg)
{
    document.write(msg);
})("This is a message.</br>");


//Function Expression
var new_num = parseInt(prompt("Enter a value to its 25 times:"))
var time25 = (function(num)
{
    document.write("25 times of "+num+" is : "+num*25)
})
time25(new_num)