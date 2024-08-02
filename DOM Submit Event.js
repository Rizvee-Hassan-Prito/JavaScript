
document.addEventListener("DOMContentLoaded",function(){
    const form= document.querySelector("form")
    const name= form.querySelector("div #name")
    const email= form.querySelector("div #email")
    const pass= form.querySelector("div #password")
    
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
        // console.log(name.value)
        // console.log(email.value)
        // console.log(pass.value)

        const info={
            name: name.value,
            email: email.value,
            pass: pass.value
        }

        console.log(info)
        
        // name.value=""
        // email.value=""
        // pass.value=""

    })
})
