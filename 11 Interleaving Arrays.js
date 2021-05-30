function interleavingArrays(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        if (arr1[i]) result.push(arr1[i]);
        if (arr2[i]) result.push(arr2[i]);
    }
    return result
}

console.log(interleavingArrays(['a', 'b', 'c'], [1, 2, 3]));