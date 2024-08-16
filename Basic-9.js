

//forEach

var names=['name1','name2','name3']

names.forEach(function(i){
    console.log(i)
});

var numbers=[3,6,9]
var numbers2=[]
numbers.forEach(function(i, index, arr){
    arr[index]=i+3
    numbers2.push(i*i)
});

console.log(numbers)
console.log(numbers2)

///////////////////map////////////////

var numbers=[3,6,9]
var arr=numbers.map(function(i)
{
    return (i*5)/10
})

console.log(arr)

///////////////////filter////////////////

var numbers=[2,3,4,5,6,7,8,9,10]
var arr=numbers.filter(function(i)
{
    return i%2==0
})

console.log(arr)