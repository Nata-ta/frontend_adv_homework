// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

const convertCtoF = (celsius) => celsius * 9 / 5 + 32;

convertCtoF(30);

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

const reverseString = (str) => str.split('').reverse().join('');

reverseString("hello");

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// Method 1

function firstFactorialize(num) {

    let counter = 1;
    let i = 1;

    for (i; i <= num; i += 1) {
        counter *= i;
    }
    return counter;
}

firstFactorialize(5);

// Method 2

const secondFactorialize = (num) => num === 0 || num === 1 ? 1 : num *= secondFactorialize(num - 1);

secondFactorialize(5);

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// Method 1

function findLongestWordLength(str) {
    let array = str.split(' ');
    let max = -Infinity;

    for (let item of array) {
        if (item.length > max) {
            max = item.length;
        }
    }

    return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Method 2

const longestWordLength = (str) => {
    let logestWord = str.split(' ').sort(function (a, b) { return b.length - a.length });

    return logestWord[0].length;
}

longestWordLength("The quick brown fox jumped over the lazy dog");

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Method 1

function getLargestOfFour(arr) {
    let result = [];
    let i = 0;

    for (i; i < arr.length; i += 1) {
        let max = -Infinity;

        for (let j of arr[i]) {
            if (j > max) {
                max = j;
            }
        }
        result.push(max);
    }

    return result;
}

getLargestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Method 2

const largestOfFour = (arr) => arr.map(item => Math.max.apply(null, item));

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Method 1

function confirmEnding(str, target) {
    const endStr = str.substring(str.length - target.length);

    if (endStr === target) {
        return true;
    } else {
        return false
    }
}

confirmEnding("Bastian", "n");

// Method 2

const trueEnding = (str, target) => str.endsWith(target);

trueEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// Method 1

function repeatStringNumTimes(str, num) {
    let empty = "";

    if (num <= 0) {
        return empty;
    } else if (num > 0) {
        let i = 0;

        for (i; i < num; i += 1) {
            empty += str;
        }
        return empty;
    }
}

repeatStringNumTimes("abc", 3);

// Method 2

const repeatedString = (str, num) => str.repeat(num);

repeatedString("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// Method 1

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Method 2

const cutString = (str, num) => (str.length > num) ? str.substring(0, num) + "..." : str;

cutString("A-tisket a-tasket A green and yellow basket", 8);

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

const findElement = (arr, func) => arr.find(func);

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

const booWho = (bool) => (typeof bool === "boolean") ? true : false;

booWho(null);