// 01. Print All
// Write a loop that prints each item from the following array:
let cities = ["Paris", "London", "Tokyo", "New York"];
for (let i = 0; i < cities.length; i++) { // for loop : initialisation; condition; incrémentation
    console.log(cities[i])
}

// 02. Count Even Numbers
// Write a function countEven(numbers) that returns how many even numbers are in the array.

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // IDC
let numbersTest = [20, 21, 22, 23, 24]

function countEven(numbers) { // IDC
    let count = 0;
    for (let i = 0; i < numbers.length; i++) { // IDC 
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven(numbersList))
console.log(countEven(numbersTest))


// 03. Add Greeting
// Create a new array that adds "Hello, " in front of each name.
// Input: ["Anna", "Liam"] → Output: ["Hello, Anna", "Hello, Liam"]

let name = ["Anna", "Liam"]

function addGreeting(namesArray) {
    let newNames = []
    for (let i = 0; i < namesArray.length; i++) {
        newNames.push("Hello, " + name[i])
    }
    return newNames
}
console.log(addGreeting(name))

// 04. Filter Short Words
// Write a function that returns a new array with only the words shorter than 5 letters.

let word = ["tornado", "fish", "sea", "sea diving", "boat"]

function wordFilter(shortWord) {
    let newArray = []

    for (let i = 0; i < shortWord.length; i++) {
        if (shortWord[i].length < 5 ) {
            newArray.push(shortWord[i])
        } 
    }
    
    return newArray
}

console.log(wordFilter(word))

// 05. Get First Letters
// Return a new array containing only the first letter of each string.
// Input: ["Apple", "Banana"] → Output: ["A", "B"]

let fruit = ["Apple", "Banana", "Orange", "Kiwi"]

function getFirstLetter(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0]);
    }

    return newArr
}

console.log(getFirstLetter(fruit)) // Or in a shorter way : function getFirstLetter(arr) { return arr.map(word => word[0]); }

// 06. Count Strings
// Write a loop that counts how many items in an array are strings.

let dataTest = ["string", "string", "string", "string", "string", false, 10, "string"]

function countStrings(arr) {
    
    let count = 0
    for (i = 0; i < arr.length; i++) {
        
        if (arr[i] === typeof "string") {
            count++
        }
    }
    return count
}
console.log(countStrings(dataTest))


// 07. Sum Numbers
// Write a loop that adds up all the numbers in an array and returns the total.




// 08. Print in Reverse
// Use a loop to print each item in an array from last to first.


// 09. Find Longest Word
// Return the longest word in an array of strings.


// 10. Capitalize All
// Return a new array with all strings in uppercase.
