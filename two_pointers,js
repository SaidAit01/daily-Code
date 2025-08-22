function findPairs(numbers, target) {
    // sort the array
    numbers.sort((a, b) => a - b);

    let left = 0;
    let right = numbers.length - 1;
    let pairs = [];

    while (left < right) {
        let total = numbers[left] + numbers[right];

        if (total === target) {
            pairs.push([numbers[left], numbers[right]]);
            left++;
            right--;
        } else if (total < target) {
            left++;
        } else {
            right--;
        }
    }
    return pairs;
}

// Example usage
let numbers = [1, 3, 5, 2, 8, -2];
let result = findPairs(numbers, 6);
console.log(result);
