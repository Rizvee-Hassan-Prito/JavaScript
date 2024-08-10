

const bt=document.querySelector("button")
const p=document.querySelector("p")
const h=document.querySelector("h1")

bt.addEventListener("click",function(){
    h.textContent="You have registered"

    setTimeout(function(){
        h.textContent=""
    }, 3000)
    setTimeout(function(){
    }, 3000)

    let c=5
    
    setInterval(function(){
        p.textContent="Returning in "+c+"..."
        c--
        if (c==-2)
        {
            bt.remove()
            p.remove()
            h.textContent="Welcome"
        }
    }, 1000)
})
//clearInterval()