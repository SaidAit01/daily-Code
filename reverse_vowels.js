// reverse the vowels of the string to get a new string with reversed vowels 
// Example : "IceCreAm" =>  "AceCreIm" 

var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split('');
    
    // Step 1: collect vowels
    let collected = arr.filter(ch => vowels.includes(ch));
    
    // Step 2: reverse them
    collected.reverse();
    
    // Step 3: replace vowels in order
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = collected[index++];
        }
    }
    
    return arr.join('');
};
