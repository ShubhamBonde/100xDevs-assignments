/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (ms) {
    if (typeof ms !== 'number') {
        throw new Error('Invalid arg \'ms\'. It must be a number.');
    }

    let prevTime = Date.now();
    console.log(prevTime)
    
    while((Date.now() - prevTime) <= ms) {
        console.clear();
        console.log(Date.now() - prevTime);
    }
    
}

setTimeout(_ => {
    // This should only get logged once the provided ms delay to the sleep function is not over.
    console.log('SetTimeout Complete');
}, 1000)

sleep(3000);