function nextLeapYears(currYear, till) {
    const lastLeapYear = currYear - (currYear % 4)
    const next20LeapYears = [];
    let currLeapYear = lastLeapYear
    for (let i = 0; i < till; i++) {
        currLeapYear += 4;
        next20LeapYears.push(currLeapYear);
    }
    return next20LeapYears
}

console.table(nextLeapYears(2021, 5));