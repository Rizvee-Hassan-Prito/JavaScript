

//////////////////////////for...of  ---> for normal type values////////////////////////// 

let numbers=[1,4,21,32]

for(let num of numbers)
{
    console.log(num)
}


//////////////////////////for ...in  ---> for object type values//////////////////////////

let friend={
    name:'F1',
    age:62,
    Height: 5.32,

}

for(let i in friend)
{
    console.log(`${i}: ${friend[i]}`)
}