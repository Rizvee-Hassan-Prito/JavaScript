var lk=document.getElementsByTagName("a")[0];
lk.innerHTML="GitHub";
// lk.style.textDecoration="none";
lk.style.color="green";
lk.style.fontSize="1.5rem";
lk.href="https://github.com/";

//creating HTML element
var hd=document.createElement("h3");
var txt=document.createTextNode("Login");
hd.appendChild(txt);
var div= document.getElementById("id1");
div.appendChild(hd);

//Remove element
var rm= document.getElementsByTagName("h2")[0];
div.removeChild(rm);

//Adding element at the top
var hd2=document.createElement("h3");
var txt=document.createTextNode("Sign Up");
hd2.appendChild(txt);

search_hd=document.getElementsByTagName("h3")[0];
div.insertBefore(hd2,search_hd);

//adding class
// document.getElementById("id1").classList; //['class1', value: 'class1']
// document.getElementById("id1").classList.add("class2");
// document.getElementById("id1").classList; //['class1', 'class2', value: 'class1 class2']
// document.getElementById("id1").classList.remove("class1");
// document.getElementById("id1").classList; //['class2', value: 'class2']