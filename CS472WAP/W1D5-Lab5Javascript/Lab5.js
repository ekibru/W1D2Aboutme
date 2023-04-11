//"use strict";
//Question 1
function max(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log('Question 1: ' + max(20, 30));

// Question 2
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    if (y > x && y > z) {
        return y;
    }
    else {
        return z;
    }

}
console.log('Question 2: ' + maxOfThree(2, -1, 9));

//Question 3
function isVowel(x) {
    if (x == 'a' || x == 'i' || x == 'o' || x == 'u' || x == 'e') {
        return true;
    }
    else {
        return false;
    }
}
console.log('Question 3: ' + isVowel('a'));

//Question 4a
function sum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];

    }
    return sum;
}
console.log('Question 4a: ' + sum([1, 2, 3, 4,5,6,7]));
// Question 4b
function multiply(a) {
    let product = 1;
    for (let index = 0; index < a.length; index++) {
        product = product * a[index];

    }
    return product;

}
console.log('Question 4b: ' + multiply([4, 3, 2, 1]));

//Question 5
function reverse(str) {
    // Checking Input Type 
    if (typeof (str) !== 'string') {
        return false;
    }

    let res = '';
    for (let index = 0; index < str.length; index++) {
        res = str.charAt(index) + res;

    }
    return res;
}
console.log('Question 5: ' + reverse('H4-DORM'));

// Question 6
function findLongestWord(arr) {
   
    let max = '';
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > max.length) {
            max = arr[index];
        }

    }
    return max.length;



}
console.log('Question 6: ' + findLongestWord(['Ephrem', 'Mickey', 'Kelifa','Gech','Gemechu']))

//Question 7
function filterLongWords(arr, i) {
    let newArr = [];
    
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > i) {
            newArr.push(arr[index]);
        }

    }
    return newArr;

}
console.log('Question 7: ' + filterLongWords(['Ephrem', 'Mikey', 'Kelifa'], 3));

//Question 8
const computeSumOfSquares = arr => arr
    .map(x => x * x)
    .reduce((a, b) => a + b, 0);
console.log('Question 8: ' + computeSumOfSquares([1, 2, 3]));

// Question 9
function printOddNumbersOnly(array) {
    if (array.length == 0) {
        return false;
    }
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            res.push(array[i]);
        }

    }
    return res;
}
console.log('Question 9: ' + printOddNumbersOnly([1, 2, 3, 4, 5, 6,7,8,9]));

//Question 10
const computeSumOfSquaresOfEvensOnly = array => array
    .filter(x => x % 2 == 0)
    .map(x => x * x)
    .reduce((a, b) => a + b, 0);

console.log('Question 10: ' + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5,6]))

//Question 11a
const summation = arr => arr
    .map(x => x)
    .reduce((a, b) => a + b, 0);
console.log('Question 11a: ' + sum([1, 2, 3, 4]));

//Question 11b
const multiplication = arr => arr
    .map(x => x)
    .reduce((a, b) => a * b, 1);
console.log('Question 11b: ' + multiplication([1, 2, 3, 4]));

//Question 12
function getSecondHighest(arrCheck) {
    var first = 0, second = 0;
    for (var i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i] > first) {
            second = first;
            first = arrCheck[i];
        }
        else if (arrCheck[i] > second && arrCheck[i] < first) {
            second = arrCheck[i];
        }
    }
    return second;
}
console.log('Question 12: ' + getSecondHighest([1, 2, 3, 4, 5]));


//Question 13
function printFibo(n, a, b) {
    console.log("Question 13: ")
    for (let i = 0; i < n; i++) {
        console.log("\t"+a);
        const sum = a + b;
        a = b;
        b = sum;

    }

}

printFibo(5, 0, 1);

//Question 14a
function sum(arr) {
  return arr.filter((num) => num > 20)
            .reduce((acc, cur) => acc + cur, 0);
}
const numbers = [10, 25, 30, 15, 50];
console.log("Question 14a:\n\tSum of Num greaterthan 20 is: "+sum(numbers)); // Output: 105
//Question 14b
const getNewArray = function(arr) {
  return (arr.filter((str) => str.length >= 5 && str.includes('a')).map((str) => str.toUpperCase()));
};
const words = ['apple', 'banana', 'orange', 'grapefruit', 'avocado', 'pear'];
console.log("Question 14b:\n\t "+getNewArray(words)); // Output: ["GRAPEFRUIT", "AVOCADO"]
function sayhi(){
    console.log(this);
}
sayhi();