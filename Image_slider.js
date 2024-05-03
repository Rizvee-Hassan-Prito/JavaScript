

var pics = ["Ellie/1.jpg", "Ellie/2.jpg", "Ellie/3.jpg"]
var img = document.querySelector("img");
var count = 0;

function next() { 
    count++;
    if (count >= pics.length) 
    { 
        count = 0;
        img.src = pics[count];
    }else{
        img.src = pics [count];
    }
}
function previous() { 
    count--;
    if (count <0 ) 
    { 
        count = pics.length-1;
        img.src = pics[count];
    }else{
        img.src = pics [count];
    }
    
}