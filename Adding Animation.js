
var length=document.querySelectorAll(".buttons").length

for(i=0;i<length;i++)
{
    document.querySelectorAll(".buttons")[i].addEventListener("click",function(){
        var ev= this.innerHTML; 
        document.querySelector("h1").innerHTML= "Voice of " +ev+ ":";
        if (ev=='Ellie William') 
        {
            var audio=new Audio("audios/Ellie.m4a")
            audio.play();
            playAnim(this)
        }
        else if (ev=='Ezio Auditore') 
        {
            var audio=new Audio("audios/Ezio.m4a")
            audio.play();
            playAnim(this)
        }
        else
        {
            var audio=new Audio("audios/Conor.m4a")
            audio.play();
            playAnim(this)
        }
    }
    )
}

function playAnim(qur)
{
    qur.classList.add("anim");
    setTimeout(function(){
        qur.classList.remove("anim")
    },500)
}