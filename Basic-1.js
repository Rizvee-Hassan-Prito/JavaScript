document.write("<h1>Hi, Im here</h1>");
document.write("<h1>Hello!</h1>");

var addr="Home 29";
document.write(addr);

var num=29;
num = toString(num);
console.log(typeof(num));
num = parseInt(num);
console.log(typeof(num));
num = parseFloat(num);
console.log(typeof(num));

var num=29.48334;
console.log(num.toFixed(2)); //29.48
console.log(num.toFixed(1)); //29.5
console.log(num.toPrecision(5)); //29.483

console.log(typeof(Number("32")));//number
console.log(typeof(Number(true)));//number
console.log((Number(true)));//1