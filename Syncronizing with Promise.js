const Task1 = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1 is completed.");
    });
};



const Task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 is completed."); 
        }, 5000);
    });
};

const Task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 3 is completed."); 
        }, 2000);
    });
};

const Task4 = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4 is completed.");
    });
};

// Execute tasks synchronously
Task1()
    .then((res) => {
        console.log(res);
        return Task2(); // Return the Task2 promise
    })
    .then((res) => {
        console.log(res);
        return Task3(); // Return the Task3 promise
    })
    .then((res) => {
        console.log(res);
        return Task4(); // Return the Task4 promise
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
