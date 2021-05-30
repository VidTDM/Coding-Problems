function maximumMinimum(arr, minMax) {
    if (minMax.toLowerCase() === 'max' || minMax.toLowerCase() === 'maximum') {
        let compareVar = arr[0];
        for (let i = 0; i < arr.length; i++)
            if (compareVar < arr[i])
                compareVar = arr[i]
        return compareVar
    } else if (minMax.toLowerCase() === 'min' || minMax.toLowerCase() === 'minimum') {
        let compareVar = 0;
        for (let i = 0; i < arr.length; i++)
            if (compareVar > arr[i])
                compareVar = arr[i]
        return compareVar
    }
}

console.log(maximumMinimum([-12, -123, -1, -3123, -123], 'max'));