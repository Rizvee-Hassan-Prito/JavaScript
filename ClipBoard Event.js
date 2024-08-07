
const input=document.querySelector("input")
const par=document.querySelector("p")

input.addEventListener("copy", function(){
    par.textContent="Text Copied"
})

input.addEventListener("cut", function(){
    par.textContent="Text Cut"
})

input.addEventListener("paste", function(){
    par.textContent="Text pasted"
})