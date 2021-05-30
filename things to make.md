1. Implement binary search: Given a sorted array, and a number, find if the number exists in the array or not. 
1. Implement a stack (pop, push) using an array.
1. Scramble a message using the Roman method 

    Roman soldiers used to use a simple code that allowed them to send secret messages over distances. 

    If the Roman alphabet has 26 letters, ordered as an alphabet ABCDEFGHIJKLMNOPQSTUVWXYZ, then an arbitrary word can be translated by rotating every letter by 13=26/2 places. Thus, A becomes N, B becomes O etc. Finally, the letter Z is translated to M.

    Write a function like this:

    function rot13(word): ...

    which returns the translated word, where word is an arbitrary string written with the 26-letter alphabet. For instance, scramble("NICK") is "AVPX". Note that,  Scrambling again yeilds original work. E.g. scramble("AVPX") yields "NICK".

    (Note: If you have a phrase, only the letters are subject to rotation, while the spaces remain fixed.)