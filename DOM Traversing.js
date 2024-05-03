
//Downwards- querry selector
const peopleList=document.querySelector(".people-list")
const p1=peopleList.children[0];
document.write(p1.innerHTML)

//Upwards- querry selector
const people1=document.querySelector("li");
const peopleList1=people1.parentElement;
document.write(peopleList1.innerHTML)

//Sideways- nextElementSibling, previousElementSibling
const p_1=document.querySelector("li");
const p_2=people1.nextElementSibling;
const p=people1.previousElementSibling;
document.write(p_2.innerHTML)
document.write(p.innerHTML)
