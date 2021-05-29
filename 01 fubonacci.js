function fubonacci(index) {
    let index0 = 0;
    let result;
    let index1 = 1;
    if (index == 1) return index0;
    if (index == 2) return index1;
    for (let i = 3; i <= index; i++) {
        result = index0 + index1
        index0 = index1
        index1 = result
    }
    return result;
}

console.log(fubonacci(15));