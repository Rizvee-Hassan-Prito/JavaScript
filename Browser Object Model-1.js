
console.log(window)

const div = document.querySelector("#New_div")

const p1= div.children[0]
p1.textContent= "href: "+location.href
console.log(location.href)

const p2= div.children[1]
p2.textContent= "Protocol: "+location.protocol
console.log(location.protocol)
const p3= div.children[2]
p3.textContent= "Host Name: "+location.hostname
console.log(location.hostname)
const p4= div.children[3]
p4.textContent= "Port: "+location.port
console.log(location.port)
const p5= div.children[4]
p5.textContent= "Path Name: "+location.pathname

document.querySelector("#b1").addEventListener("click",function(){
        location.assign("https://medium.com/@stheodorejohn/browser-object-model-bom-exploring-the-javascript-window-fcaeea76b1b4#")
}) 

