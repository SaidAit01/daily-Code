var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) return "";

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let gcdLen = gcd(str1.length, str2.length);

    return str1.substring(0, gcdLen);
};
