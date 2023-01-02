//algorithm to calculate the dot product of two vectors and determine whether they are orthogonal
// using a procedure in Javascript
function dotProduct(v1, v2) {
    let prod = 0;
    for (let i = 0; i < v1.length; i++) {
        prod += v1[i] * v2[i];
    }
    return prod;
}

function isOrthogonal(v1, v2) {
    const dotProd = dotProduct(v1, v2);
    if (dotProd === 0) {
        console.log("The vectors are orthogonal.");
    } else {
        console.log("The vectors are not orthogonal.");
    }
}

const v1 = [1, 0, 0];
const v2 = [4, 5, 6];
const v3 = [7, 8, 9];
const v4 = [0, 1, 0];
isOrthogonal(v1, v4);
isOrthogonal(v1, v2);
isOrthogonal(v2, v3);

//using a function instead of a procedure
function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function isOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

const v1 = [1, 0, 0];
const v2 = [0, 1, 0];
const v3 = [1, 1, 1];
const v4 = [-1, 1, -1];

console.log(isOrthogonal(v1, v2));  
console.log(isOrthogonal(v1, v3));  
console.log(isOrthogonal(v3, v4));  