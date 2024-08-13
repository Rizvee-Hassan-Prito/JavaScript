
document.querySelector("button").addEventListener("click",function(){
    let val= document.querySelector("input").value
    
    try{
        
        if(!parseFloat(val))
        {
            document.querySelector("#id1").innerHTML="Check Console"
            throw "Error Occurred! Could't find number"
            
        }
        else{
            document.querySelector("#id1").innerHTML="Recevied"
        }
    }
    catch(err)
    {
        console.log(err)
    }
    
})
