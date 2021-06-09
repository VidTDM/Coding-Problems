function binarySearch(arr, item) {
    let c1 = 0;
    let c2 = arr.length - 1;
    let m = Math.ceil((c1 + c2) / 2);
    while (c1 != c2) {
        if (arr[m] == item)
            return m;
        else if (arr[c1] == item)
            return 0;
        else if (arr[m] < item)
            c1 = m;
        else if (arr[m] > item)
            c2 = m;
        m = Math.ceil((c1 + c2) / 2);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 1));