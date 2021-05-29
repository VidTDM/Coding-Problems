function isPalindrome(str) {
    str = str.split('');
    let d = 0;
    let u = str.length - 1;
    while (true) {
        const uLetter = str[u];
        const dLetter = str[d];
        if (!uLetter === dLetter) return false;
        d++;
        u--;
        if (u === -1 && d === str.length) return true;
    }
}

console.log(isPalindrome('malayalam'));