
const Task1=()=>{
    console.log("Task 1 is completed.")
}

function task2Process()
{
    console.log("Task 2 is completed.")
}

const Task2=()=>{
    setTimeout(task2Process,2000)
}

function task3Process()
{
    console.log("Task 3 is completed.")
}
const Task3=()=>{
    setTimeout(task3Process,3000)
}

const Task4=()=>{
    console.log("Task 4 is completed.")
}

Task1()
Task2()
Task3()
Task4()