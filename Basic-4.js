function prime(n){
    for(var x=2; x<=n;x++)
    {
        var f=1;
        for(var y=2; y<=x/2;y++)
        {
            var condition = x%y==0 ? 1:0
            if (condition)
            {
                f=0;
                break;
            }
        }
        if (f==1)
        {
            document.write(x+" ");
        }
    }
}

num=prompt("Enter a value to see prime numbers up to that valeus:")
num=parseInt(num)
document.write("<h3>Prime numbers up to "+num+": </h3>");
prime(num);

Math.ceil(3.2)//4
Math.floor(3.5)//3
Math.floor(Math.random()*5)//generate a random a numuber from 0 to 4
Math.floor(Math.random()*5)+10//generate a random a numuber from 10 to 14