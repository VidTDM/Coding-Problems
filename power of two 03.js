function powerOfTwo(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= 2
    }
    return result;
}

console.log(powerOfTwo(10));