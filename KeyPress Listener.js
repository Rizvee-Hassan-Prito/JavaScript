var c=0;
document.addEventListener("keypress",function(event)
{
    var x=event.key
    if(x!=" " || x!="." || x!="?" || x!="-" || x!=":"){
        c++;
    }
    document.querySelector("p").innerHTML="Number of letter: "+ c;
})