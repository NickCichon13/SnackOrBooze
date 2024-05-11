function unroll(squareArray) {
    let res = [];
    let top = 0;
    let bottom = squareArray.length -1;
    let left = 0;
    let right = squareArray[0].lenght -1;

    while (top <= bottom && left <= right) {
// We are printing the top row here
        for (let i =left; i <= right; i++) {
            res.push(squareArray[top][i]);
        }
// Now we will move the top boundry down to the next array.
        top++;

// next we will print the right colum.

        for (let i = top; i <= bottom; i++){
            res.push(squareArray[i][right])
        }
// Now we will move to the left of the next array.
        right--;

// Next we will need to check if there are more rows.
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(squareArray[bottom][i]);
            }
// This will then move up again in the square array.
        bottom--;

// lastly we will need to check if there are more colums.
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    res.push(squareArray[i][left]);

        left++
                }
            }
// then we will return the results.
            console.log(res.join(''));
        }
    }

}

module.exports = unroll;
