/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        
        setTimeout(_ => {

            if (typeof n !== 'number') {
                reject('Invalid input')
            }
            

            resolve(`This resolved after ${n} seconds`);
        }, n*1000)
    }) 
}

wait(2).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})