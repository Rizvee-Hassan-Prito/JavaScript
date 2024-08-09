

const cnf= window.confirm("Are you Rizvee?\nClick 'Ok' to confirm")


const h1= document.createElement("h1");
var txt

if(cnf)
{
    let pass=prompt("Enter Password:")
    function passwordCheck(){
        if(pass=="1111")
        {
            txt="Welcome Rizvee."
        }
        else
        {
            txt="You are not Rizvee. Access Denied."
        }
    }
    passwordCheck()
}
else{
    txt="Access Denied."
}
let txtnode=document.createTextNode(txt)
h1.appendChild(txtnode);
document.body.appendChild(h1)