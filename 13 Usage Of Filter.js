function findLeapYears(arr) {
    const result = arr.filter(item => {
        if (item % 4 === 0) return true
        return false
    });
    return result
}

console.log(findLeapYears([2024, 2028, 2032, 2036, 2040, 1201]));