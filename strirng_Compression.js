var compress = function(chars) {
    let write = 0; // where we write compressed result
    let read = 0;  // where we read original array

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        // count group length
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // write the character
        chars[write] = currentChar;
        write++;

        // write the count if > 1
        if (count > 1) {
            let digits = count.toString(); // example: 12 → "12"
            for (let d of digits) {
                chars[write] = d;
                write++;
            }
        }
    }

    return write;
};
