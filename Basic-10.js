


///////////////////Arrow Function///////////////////

const sum= (n1,n2) => {
    return n1+n2
}
const print = ()=>{
    return `Printing...`
}

console.log(sum(2,3))
console.log(print())

///////////////////Object typa Array & Arrow Function///////////////////


const Info=[
    {
        id:1001,
        age:23
    },

    {
        id:1023,
        age:34
    },

    {
        id:1009,
        age:87
    },

    {
        id:1101,
        age:52
    },

    {
        id:1012,
        age:15
    }
]

const infoPrint1= Info.filter((x)=>{return x.age<50})
const infoPrint2= Info.filter((x)=>{return x.age<50}).map((y)=>{return y.id})

console.log(infoPrint1)
console.log(infoPrint2)
