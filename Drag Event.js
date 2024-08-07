

const div=document.querySelector("div")
const par=document.querySelector("p")

par.addEventListener("dragstart",function(ev){
   ev.dataTransfer.setData("key",ev.target.id)
})

div.addEventListener("dragover",function(ev){
    ev.preventDefault()
 })

div.addEventListener("drop",function(ev){
    const txt=ev.dataTransfer.getData("key")
    console.log(txt)
    div.appendChild(document.querySelector("#"+txt))
})

