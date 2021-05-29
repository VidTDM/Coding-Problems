function oddFinder(arr) {
    const numsAtOddIndex = [];
    for (let i = 0; i < arr.length; i++)
        if (i % 2 !== 0)
            numsAtOddIndex.push(arr[i]);
    return numsAtOddIndex
}

console.table(oddFinder([234, 3, 42, 2323]));