function negsPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((e) => {
                    return e < 0;
                });
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject(`Row Index ${rowIdx} must be wriiten within 0 and ${arr.length}`);
        }
        console.log('returning from sum');
    });
}

negsPerRowPromises = [];
for (let x = 0; x < array2D.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D, x));
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

Promise.any(negsPerRowPromises)
.then((negs) => {
    console.log(negs);
})
.catch((err) => {
    console.log(err);
});