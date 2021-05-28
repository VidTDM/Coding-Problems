function indexOf(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        if (currNum === num) return i + 1
    }
    return -1
}

console.log(indexOf([1, 3, 24, 34, 2, 42342, 4232], 24));