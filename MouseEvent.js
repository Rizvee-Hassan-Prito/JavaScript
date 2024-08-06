const div= document.querySelector("div")
// console.log(div)

div.addEventListener("click",function(ev){
    console.log("Clicked")
    console.log(ev.target)
    console.log(ev.target.innerHTML)
    console.log(ev.target.textContent)
})

div.addEventListener("dblclick",function(){
    console.log("Double Clicked")
})

div.addEventListener("mouseup",function(){
    console.log("Mouse up")
})

div.addEventListener("mousedown",function(){
    console.log("Mouse down")
})

div.addEventListener("mouseenter",function(){
    console.log("Mouse Enter")
})

div.addEventListener("mouseleave",function(){
    console.log("Mouse leave")
})

div.addEventListener("mousemove",function(ev){
    // console.log("Mouse move")
    console.log("ClientX: "+ev.clientX+ " ClientY: "+ev.clientY)
    console.log("OffsetX: "+ev.offsetX+ " OffsetY: "+ev.offsetY)
})

div.addEventListener("mouseover",function(){
    console.log("Mouse over")
})




const btns=document.querySelectorAll(".btn")

Array.from(btns).map((button) => {
    button.addEventListener("click",function(ev){
        console.log(ev.target.textContent)
    })
})