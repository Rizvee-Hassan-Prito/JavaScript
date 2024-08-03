const video= document.querySelector("video")

document.addEventListener("DOMContentLoaded",function(){
    video.addEventListener("canplay", function(){
        console.log("canplayed")
    })

    video.addEventListener("play", function(){
        console.log("played")
    })

    video.addEventListener("pause", function(){
        console.log("paused")
    })

    video.addEventListener("ended", function(){
        console.log("Video is ended")
    })

    video.addEventListener("volumechange", function(){
        console.log("volume is changed")
    })
})