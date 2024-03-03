function negsPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((e)=> {
                    return e < 0;
                }).length > 0 ? resolve(`Found Evidence: ${arr[rowIdx]}`) : reject('reject');
            }, 0);
        }
        else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

negsPerRowPromises = [];

for (let x = 0; x < array2D.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D, x));
}

Promise.any(negsPerRowPromises)
.then((negs) => {
    if (negs) {
        console.log(negs);
    } else {
        console.log('No rows with negative numbers found.');
    }
})
.catch((err) => {
    console.log(err);
});