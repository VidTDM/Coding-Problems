function tableOf(num, till) {
    for (let i = 1; i <= till; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

console.log(tableOf(5, 11));