window.addEventListener("load", function(){
    console.log("loaded")
})

window.addEventListener("unload", function(){
    console.log("unloaded")
})

window.addEventListener("resize", function(){
   const h=this.window.outerHeight
   const w= this.window.outerWidth
   console.log("Height:"+h+" Width:"+w)
})

document.querySelector("details").addEventListener("toggle",function(){
    console.log(this.open)
})
