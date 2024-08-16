

//////////////////////////Object Literals//////////////////////////

function Person(name, Height, Weight)
{
    return{
        name, 
        Height,
        Weight
    }
}

console.log(Person("Prito", 5.5, 72))

//////////////////////////Function in object//////////////////////////
let print={
    content(){
        return 'Printing...'
    }
}

console.log(print.content())