/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
console.log("-------------------------EXERCISE-1-------------------------------------------------")

const sumOfNumbers = function (a, b) {
    let result = 0
    if (a === b) {
        result = (a + b) * 3
    }
    else {
        result = a + b
    }
    return result;

}
console.log(sumOfNumbers(5, 5))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("-------------------------EXERCISE-2-------------------------------------------------")
const checkTheSum = function (a, b) {
    let number;

    if ((a + b) === 50) {
        number = true;

    }
    else if (((a) === 50) || ((b) === 50)) {
        number = true;
    } else {
        return false;
    }
    return number
}

console.log(checkTheSum(10, 10))

/*
3)

Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("-------------------------EXERCISE-3-------------------------------------------------")

const oldString = function (string, position) {
    let newString = string.slice(0, position) + string.slice(position + 1)
    return newString;
}
console.log(oldString("StriveSchool", 2))
/*

4)
 Create a function to find the largest of three given integers.

*/
console.log("-------------------------EXERCISE-4-------------------------------------------------")
const findLargestNumber = function (n1, n2, n3) {
    let theNumber = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
    return theNumber;

}

console.log(findLargestNumber(11, 52, 23))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("-------------------------EXERCISE-5-------------------------------------------------")
const findTheNumber = function (n1, n2) {

    let newNumber = (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
        (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
    return newNumber;

}
console.log(findTheNumber(43, 55))
console.log(findTheNumber(79, 199))


/*
6)

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("-------------------------EXERCISE-6-------------------------------------------------")



/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("-------------------------EXERCISE-7-------------------------------------------------")
const displayCityName = function (string) {
    return string.startsWith(`Los`) || string.startsWith(`New`) ? string : `blank`
}


console.log(displayCityName("Newyork"))
console.log(displayCityName("Los Angeles"))
console.log(displayCityName("stockholm"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("-------------------------EXERCISE-8-------------------------------------------------")
const testAnArray = function (...array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(testAnArray(10, 11, 12))


/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/
console.log("-------------------------EXERCISE-9-------------------------------------------------")
const arrayOfInteger = function (...array) {
    return array.includes(1) || array.includes(3)

}
console.log(arrayOfInteger(1, 3))
console.log(arrayOfInteger(5, 1))
console.log(arrayOfInteger(6, 3))
console.log(arrayOfInteger(6, 6))




/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */
console.log("-------------------------EXERCISE-10------------------------------------------------")

const newArrayOfIntegers = function (array) {
    let cum = array !== arrayOfInteger()
    return cum;
}
console.log(newArrayOfIntegers(6, 6))
console.log(newArrayOfIntegers(5, 1))
console.log(newArrayOfIntegers(6, 3))
console.log(newArrayOfIntegers(1, 6))


/*

11)

Create a function to find the longest string from a given array of strings.*/
console.log("-------------------------EXERCISE-11------------------------------------------------")

const longestString = function () {
}
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/
/*
13)

Create a function to find the index of the greatest element of a given array of integers */
/*
14)

Create a function to get the largest even number from an array of integers. */

/*16)

Create a function to check from two given integers, whether one is positive and another one is negative. */

/*17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case.If the string length is less than 3 convert all the characters in upper case. */

/*18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
console.log("-------------------------EXERCISE-5-------------------------------------------------")
const findTheNumber = function (n1, n2) {

    let newNumber = (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
        (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
    return newNumber;

}
console.log(findTheNumber(43, 55))
console.log(findTheNumber(79, 199))

/*

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

    */