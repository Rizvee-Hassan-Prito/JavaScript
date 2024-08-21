
const Task1=(callback)=>{
    console.log("Task 1 is completed.")
    callback()
}

function task2Process(callback)
{
    console.log("Task 2 is completed.")
    callback()
}

const Task2=(callback)=>{
    setTimeout(task2Process(callback),2000)

}

function task3Process(callback)
{
    console.log("Task 3 is completed.")
    callback()
}
const Task3=(callback)=>{
    setTimeout(task3Process(callback),5000)

}

const Task4=()=>{
    console.log("Task 4 is completed.")
}

Task1(()=>{
    Task2(()=>{
        Task3(()=>{
            Task4()
        })
    })
})

