const Task1 = () => {
    return new Promise((resolve) => {
        resolve("Task 1 is completed.")
    })
}

const Task2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 is completed.") 
        }, 2000)
    })
};

const Task3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 is completed.")  // Resolve the promise after the task is done
        }, 2000)
    })
}

const Task4 = () => {
    return new Promise((resolve) => {
        resolve("Task 4 is completed.")
    })
}

// Execute tasks synchronously
async function Sync() {
    try {
        const task_1=await Task1() 
        console.log(task_1)
        const task_2=await Task2() 
        console.log(task_2)
        const task_3=await Task3() 
        console.log(task_3)
        const task_4=await Task4() 
        console.log(task_4)
    } catch (err) {
        console.log(err)
    }
}

Sync()
