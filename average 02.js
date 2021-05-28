function average(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum = sum + number
    });
    const result = sum / numbers.length;
    return result;
}

console.log(average([5, 10]));