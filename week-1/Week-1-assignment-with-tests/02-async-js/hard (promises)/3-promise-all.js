/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const { Console } = require("console")


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve(`Function ${arguments.callee.name}() resolved.`)
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve(`Function ${arguments.callee.name}() resolved.`)
        }, 2000)
    })

}

function waitThreeSecond() {
    return new Promise(resolve => {
            setTimeout(_ => {
                resolve(`Function ${arguments.callee.name}() resolved.`)
            },3000)
    })
}


function waitForAll() {
    return new Promise(resolve  => {
        waitOneSecond().then( _ => {
            console.log('Promise 1 resolved');
            waitTwoSecond().then( _ => {
                console.log('Promise 2 resolved');
                waitThreeSecond().then(data => {
                    console.log('Promise 3 resolved');
                    console.log(`All promises resolved`);
                    console.log(data);
                    resolve(null)
                })
            })
        })
    })
}


function calculateTime() {
    console.time('Total Time: ');
    waitForAll().then(_ => {
        console.timeLog('Total Time: ')
    });
}
