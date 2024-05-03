// var ev=document.querySelector("h1").addEventListener("mouseover",msov)
// function msov()
// {
//     var ch=document.querySelector("h1");
//     ch.classList.add("par-style2");
//     ch.innerHTML="I'm not here"

// }

// var ev2=document.querySelector("h1").addEventListener("mouseout",msou)
// function msou()
// {
//     var ch=document.querySelector("h1");
//     ch.classList.remove("par-style2");
//     ch.innerHTML="Rizvee Hassan Prito"
// }

//With Anonymous Function
var ev=document.querySelector("h1").addEventListener("mouseover",function ()
{
    {
        var ch=document.querySelector("h1");
        ch.classList.remove("par-style2");
        ch.classList.add("par-style");
        ch.innerHTML="I'm not here"
    }
})

var ev2=document.querySelector("h1").addEventListener("mouseout",function ()
{
    var ch=document.querySelector("h1");
    ch.classList.remove("par-style");
    ch.classList.add("par-style2");
    ch.innerHTML="Rizvee Hassan Prito"
    
})
