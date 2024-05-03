list_of_num_1=[]
for (var i = 0; true; i++)
{
    var value=parseInt(prompt("Enter a number: "))
    if(value!=0)
        //list_of_num_1[i]= value%2==0 ? value+1:value+2
        list_of_num_1[i]=value
    else
        break
}
document.write("Numbers of first array: "+list_of_num_1+"</br>");
document.write("Length of first array: "+list_of_num_1.length+"</br>");

list_of_num_2 = list_of_num_1.concat(list_of_num_1,[777,888,999])
list_of_num_2.push(666)
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.push(100)//adding 100 at the last position
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.pop()//removing 100 at the last position
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.shift()//opposite of pop. Deleting from first
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.unshift(800)//opposite of push. Adding at fist
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.splice(3,1,100,500)//Removing 1 element from 3rd position and Adding 100 and 500 from 3rd position
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2.splice(2,2)//Removing 2 element from 2nd position
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
document.write("Length of 2nd array: "+list_of_num_2.length+"</br>");
list_of_num_2=list_of_num_2.sort(function(a,b){return a-b})
document.write("Numbers of 2nd array in sorted: "+list_of_num_2+"</br>");
list_of_num_2=list_of_num_2.reverse()
document.write("Numbers of 2nd array in reversed: "+list_of_num_2+"</br>");
list_of_num_2=list_of_num_2.slice(2)//Removing first 2 elements  
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
list_of_num_2=list_of_num_2.slice(2,5)//Saving only elements from 2nd position to 5th position
document.write("Numbers of 2nd array: "+list_of_num_2+"</br>");
document.write("Length of 2nd array: "+list_of_num_2.length+"</br>");

//2D array

// function array2D(arr,n)
// {
//     a=[]
//     for(var i=0; i<n;i++)
//     {
//            a[i]=parseInt(prompt("Enter a value:"))
//     }
//     arr[arr.length]=a
//     for(var i=0; i<arr.length;i++)
//     {
//            document.write(arr[i]+"</br>") 
//     }
// }

// array=[1,2,3]
// array2D(array,3)