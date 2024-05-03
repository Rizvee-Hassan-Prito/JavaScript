
//Constructor
function person (name, height, job, likings)
{
    this.name= name
    this.height= height
    this.job= job
    this.likings = likings

    this.display=function()
    {
        document.write("Name: "+this.name+"</br>")
        document.write("Height: "+this.height+"</br>")
        document.write("Job: "+this.job+"</br>")
        document.write("Likings: "+this.likings+"</br>")
        document.write("</br>")
    }
}

person_array=[]
for(var i=0;i<3; i++)
{
    var person1 = new person(prompt("Enter Name:"),prompt("Enter Height:"),prompt("Enter Job:"),prompt("Enter Likings:"))
    person_array[i]=person1
}

for(var j=0; j<person_array.length;j++)
{
    person_array[j].display()   
}