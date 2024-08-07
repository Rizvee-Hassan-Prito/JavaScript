
const txtar=document.querySelector("textarea")

document.addEventListener("DOMContentLoaded",function(){
    txtar.addEventListener("keydown", function(e){
        console.log("Down")

        if(e.repeat)
        {
               alert("Key is repeating......")
        }
    })
    txtar.addEventListener("keyup", function(e){
        console.log(e.key)
        console.log(e.keyCode)
        if(e.shiftKey)
        {
            console.log("Shift is pressed")
        }

    })
})
