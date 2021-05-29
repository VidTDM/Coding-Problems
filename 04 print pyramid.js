console.log(printPyramid(3));

function printPyramid(height) {
    let length = height;
    let amtOfSpaces = 1;
    let x = '';
    for (let a = 1; a <= height; a++) {
        for (let j = height; j >= amtOfSpaces; j--) x += ' '
        for (let i = height; i >= length; i--) x += ' ▲'
        length--;
        x += '\n';
        amtOfSpaces++;
    }
    return x;
}