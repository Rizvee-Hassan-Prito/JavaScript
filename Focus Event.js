

document.querySelector("input").addEventListener("blur",function(){
    document.querySelector("input").style.backgroundColor="transparent"
    document.querySelector("input").style.padding="0"
})

document.querySelector("input").addEventListener("focus",function(){
    document.querySelector("input").style.backgroundColor="blueviolet"
    document.querySelector("input").style.padding="1rem"
})
