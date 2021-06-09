function unscrambleAndScramble(txt) {
    return txt.split('').map(item => {
        const itemCharCode = item.charCodeAt(0) + 13;
        if (/[A-Z]/g.test(item)) {
            if (itemCharCode < 091)
                return String.fromCharCode(itemCharCode);
            return String.fromCharCode(itemCharCode - 26);
        } else if (/[a-z]/g.test(item)) {
            if (itemCharCode < 123)
                return String.fromCharCode(itemCharCode);
            return String.fromCharCode(itemCharCode - 26);
        } else
            return item;
    }).join('');
}

console.log(unscrambleAndScramble('This is a secret message.'));