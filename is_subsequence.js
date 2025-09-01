var isSubsequence = function(s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // found a match, move to next char in s
        }
        j++; // always move t forward
    }

    return i === s.length; // if we matched all chars in s
};
