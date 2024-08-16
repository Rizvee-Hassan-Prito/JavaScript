
//////////////////////////Default Parameter//////////////////////////
function msg(txt="Default parameter"){
    console.log(txt)
}

msg()
msg("Printing...")



//////////////////////////Rest Parameter//////////////////////////
function number(x,y, ...r)
{
    console.log(`x=${x}\ny=${y}\nz=${r}`)
}
number(10,15,100,200,1300)


//Spread Operator

function number(x,y,r)
{
    console.log(`x=${x}\ny=${y}\nz=${r}`)
}
n=[10,11,12]
number(...n)

n2=[8,9,...n]

console.log(n2)

n3=[...n, 13,14,...n2]
console.log(n3)

N=[...n,...n2,...n3]
console.log(N)


let ex1 ={
    Bangle:81,
    English:85
}

let ex2 ={
    Math:95,
    Science:94
}

let Ex={
    ...ex1, ...ex2
}

console.log(Ex)
