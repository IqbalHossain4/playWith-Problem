console.log("Hello World");

let arr = [10, 20, 40, 50, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
function propo(x) {
  let y = x.toString();
  let k = y.length;
  for (let i = 0; i < k; i++) {
    if (y[i] != y[k]) {
      return false;
    }
    k--;
  }
  return true;
}
console.log(propo(121));

// Find Lower number in array
const array = [2, 3, 4, 9, 8];

function lowerNumber(arr) {
  let lowe = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (lowe > arr[i]) {
      lowe = arr[i];
    }
  }
  return lowe;
}
console.log(lowerNumber(array));

// Find Bigger number in array

const arrBigger = [10, 20, 30, 40, 50, 70];
function biggerNum(arr) {
  let bigger = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (bigger < arr[i]) {
      bigger = arr[i];
    }
  }
  return bigger;
}
console.log(biggerNum(arrBigger));

// Fibonacci Series
function generateFibonacciSeries(number) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

generateFibonacciSeries(10);

// Letter Count
console.log("Letter Counter");

let str = "how count letters in javascript";
let letterCount = str.split(/\W/).join("").length;

console.log(letterCount);

// Word Count
const words = "Amar Sonar Bangla. Ami Tomay Valobashi";
function wordCount(word) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char == " " || char == ".") {
      counter++;
    }
  }
  return counter;
}
console.log(wordCount(words));
