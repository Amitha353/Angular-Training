/**
 * Asynchronous communication
 */
function doTaskResolve() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Success!!!");
        }, 1000);
    })
}

doTaskResolve().then((data) => console.log(data), (err) => console.log(err));

/**
 * OLD Way - without => (arrows)
 *  
 doTask().then(function(data) {
     console.log(data);
 }, function(err) {
     console.log(err);
 }) 
 */

function doTaskReject() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject("Error!!!");
        }, 1000);
    })
}

doTaskReject().then((data) => console.log(data), (err) => console.log(err));

