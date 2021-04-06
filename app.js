// 1. Display numbers from 1 to 10
console.log("1. Display numbers from 1 to 10");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 2. Print the odd numbers less than 100
console.log("2. Print the odd numbers less than 100");
const print = () => {
  for (let i = 100; i > 0; i--) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }
};
print();

// 3. Print the multiplication table with 7
console.log("3. Print the multiplication table with 7");
const multiplicationTable7 = () => {
  for (let i = 1, seven = 7, result = 0; i < 11; i++) {
    result = seven * i;
    console.log(`${seven} * ${i} = ${result}`);
  }
};
multiplicationTable7();

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log("4. Print all the multiplication tables with numbers from 1 to 10");
const multiplicationTable1to10 = () => {
  let result = 0;
  for (let i = 1; i < 11; i++) {
    console.log(`Print the multiplication table with ${i}`);
    for (let j = 1; j < 11; j++) {
      result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
  }
};
multiplicationTable1to10();

// 5. Calculate the sum of numbers from 1 to 10
console.log("5. Calculate the sum of numbers from 1 to 10");
const sumFrom1To10 = () => {
  result = 0;
  for (let i = 1; i <= 10; i++) {
    result = result + i;
  }
  console.log(`sum of numbers from 1 to 10 is ${result}`);
};
sumFrom1To10();

// 6. Calculate 10! -- to be finished
console.log("6. Calculate 10!");
const factorial = () => {
  let result = 1;
  for (let i = 10; i >= 1; i--) {
    result = result * i;
  }
  console.log(`10! is ${result}`);
};
factorial();

// 7. Calculate the sum of odd numbers greater than 10 and less than 30
console.log(
  "7. Calculate the sum of odd numbers greater than 10 and less than 30"
);
const sumOfOddNumbers = () => {
  let summ = 0;
  for (let i = 10; i <= 30; i++) {
    if (i % 2 == 0) {
      continue; //if num is odd, skip it.
    }
    summ += i;
  }
  console.log(`sum is ${summ}`);
};
sumOfOddNumbers();

// 8. Calculate the sum of numbers in an array of numbers
console.log("8. Calculate the sum of numbers in an array of numbers");
const sumOfArrayNumbers = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arrA = [10, 20, 30, 40, 50];
  console.log(`Sum in array A ${arrA} is: ${arrA.reduce(reducer)}`);
};
sumOfArrayNumbers();

// 9. Calculate the average of the numbers in an array of numbers
console.log("9. Calculate the average of the numbers in an array of numbers");
const average = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arrB = [1, 20, 7, 40, 4, 9, 18];
  console.log(`Array B is ${arrB}`);
  let sum = arrB.reduce(reducer);
  console.log(`Average is  ${(avg = sum / arrB.length)}`);
};
average();

// 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers
console.log(
  "10. Create a function that receives an array of numbers and returns an array containing only the positive numbers"
);
const positiveNumbers = () => {
  const arrC = [-1, 15, -7, 40, -13, -10, 18];
  const positiveArray = [];

  console.log(`Array C is ${arrC}`);

  returnPositive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveArray.push(arr[i]);
      }
    }
    console.log(`Positive Array is: ${positiveArray}`);
  };
  returnPositive(arrC);
};
positiveNumbers();

// 11.Find the maximum number in an array of numbers
console.log("11.Find the maximum number in an array of numbers");
findMaximum = () => {
  const arrD = [11, 15, -7, 40, 23, -10, 18];
  console.log(`Array D is ${arrD}`);
  console.log(`The maximum number in the array is ${Math.max(...arrD)}`);
};
findMaximum();

// 12. Create a function that will return a Boolean specifying if a number is prime
console.log(
  "12. Create a function that will return a Boolean specifying if a number is prime"
);
const primeNumbers = (number) => {
  prime = true;
  if (number === 1) {
    console.log("1 is not prime");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      console.log(`${number} is prime`);
    } else {
      console.log(`${number} is not prime`);
    }
  } else {
    console.log("Negative number");
  }
};
primeNumbers(7);

// 13. Calculate the sum of digits of a positive integer number
console.log("13. Calculate the sum of digits of a positive integer number");
const sumOfDigits = () => {
  const positiveInteger = 20210406;
  //convert integer to string
  let string = positiveInteger.toString();
  console.log(`Positive integer is ${positiveInteger}`);
  const strArr = [];
  //convert string to array of strings
  for (let i = 0; i < string.length; i++) {
    strArr.push(string[i]);
  }
  //convert string array to int array
  const intArray = strArr.map((i) => Number(i));

  //console.log(intArray);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(`Sum is : ${intArray.reduce(reducer)}`);
};
sumOfDigits();

// 14. Print the first 100 prime numbers
console.log("14. Print the first 100 prime numbers");
const primeGenerator = () => {
  const store = [];
  const primeArr = [];
  for (let i = 2; i <= 100; ++i) {
    if (!store[i]) {
      primeArr.push(i);
      for (let j = i << 1; j <= 100; j = j + i) {
        store[j] = true;
      }
    }
  }
  console.log(primeArr);
};
primeGenerator();

// 15. Rotate an array to the left 1 position
console.log("15. Rotate an array to the left 1 position");
const rotateArray = () => {
  const originalArray = [11, 32, 74, 5, 1];
  console.log(`Original array: ${originalArray}`);
  const shft = originalArray.shift();
  originalArray.push(shft);
  console.log(`Shifted array: ${originalArray}`);
};
rotateArray();

// 16. Reverse an array
console.log("16. Reverse an array");
const reverseArray = () => {
  const originalArray = [11, 32, 74, 5, 1];
  console.log(`Original array: ${originalArray}`);
  console.log(`Reverse array: ${originalArray.reverse()}`);
};
reverseArray();

// 17. Create a function that will merge two arrays and return the result as a new array
console.log(
  "17. Create a function that will merge two arrays and return the result as a new array"
);
const mergeTwoArrays = () => {
  const arr1 = [11, 32, 74, 5, 1];
  const arr2 = [11, 35, 70, 5, 10];
  console.log(`Array1: ${arr1}`);
  console.log(`Array2: ${arr2}`);
  //find differences
  const temp1 = arr1.filter((temp1) => !arr2.includes(temp1));
  const temp2 = arr2.filter((temp1) => !arr1.includes(temp1));
  //find common
  const temp3 = arr1.filter((temp3) => arr2.includes(temp3));
  //merge
  const merge = temp1.concat(temp3, temp2);
  console.log(`Merged array: ${merge}`);
};
mergeTwoArrays();

// 18. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
console.log(
  "18. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both"
);
{
  const array1 = [11, 32, 74, 5, 1];
  const array2 = [11, 35, 70, 5, 10];

  const diffOfArrays = (arr1, arr2) => {
    console.log(`Array1: ${arr1}`);
    console.log(`Array2: ${arr2}`);
    //find differences
    const temp1 = arr1.filter((temp1) => !arr2.includes(temp1));
    const temp2 = arr2.filter((temp1) => !arr1.includes(temp1));
    //return unique elements from both arrays
    const unique = temp1.concat(temp2);
    console.log(`Array with unique elements from both arrays: ${unique}`);
  };
  diffOfArrays(array1, array2);
}

// 19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
console.log(
  "19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements"
);
{
  const nonDistinctArr = [11, 32, 74, 5, 1, 11, 35, 70, 5, 10];
  console.log(`Original array: ${nonDistinctArr}`);
  const distinct = [];

  const returnDistinct = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
      if (!distinct.includes(arr1[i])) {
        distinct.push(arr1[i]);
      }
    }
    console.log(`Array with unique elements: ${distinct}`);
  };
  returnDistinct(nonDistinctArr);
}

// 20. Create a function that will return the number of words in a text
console.log(
  "20. Create a function that will return the number of words in a text"
);

const countWords = () => {
  const text =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ";
  console.log(`Text is: ${text}`);
  let counter = 0;

  for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) == " ") {
      counter++;
    }
  }
  console.log(`Number of words is: ${counter}`);
};
countWords();
