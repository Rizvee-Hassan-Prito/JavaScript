
const bt=document.querySelector("button")
const h=document.querySelector("h1")

bt.addEventListener("click", function(){
    
    
    setInterval(function(){
        const time = new Date()
        const sec= time.getSeconds()
        const min= time.getMinutes()
        const hr= time.getHours()
        h.textContent=hr+":"+min+":"+sec        
    },1000)  
})
