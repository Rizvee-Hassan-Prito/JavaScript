//querySelector
var qu1= document.querySelector("a")
qu1.innerHTML="Visit Google Now"

var qu2= document.querySelector("#first-div h4")
qu2.innerHTML="Hello, Students!"

var qu3= document.querySelector(".my-div #l1")
qu3.innerHTML="This is first student."
var qu3= document.querySelector(".my-div #l2")
qu3.innerHTML="This is second student."

//querySelectorAll
var qu4= document.querySelectorAll("li") // l1 l2
qu4[1].innerHTML="This is a student."