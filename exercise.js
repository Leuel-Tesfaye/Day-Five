// 1. Declare an empty array 
let arr = []
console.log(arr)

// 2. Declare an array with more than 5 number of elements
let numbers = [1,2,3,4,5]
    console.log(numbers)

//3. Find the length of your array
let fruits = ['Banana', 'Mango', 'orange']
    console.log(fruits.length)

// 4. Get the first item, the middle item and the last item of the array
let num = [1,2,3,4,5,6]
let lastIndex = num.length 
console.log(num[0])
console.log(num[2])
console.log (lastIndex)

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'leuel',
    23,
    'programmer',
    1.75,
    true,
]
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
    console.log(itCompanies) //7. Print the array using console.log()

// 8. Print the array using console.log()
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
    let lastIndex2 = itCompanies.length -1
console.log(lastIndex2)
// 10 . Print out each company
for (var i = 0; i< itCompanies.length; i++){
    console.log(itCompanies[i])
}

// 11. Change each company name to uppercase one by one and print them out
    // console.log(itCompanies.toUpperCase())

// 12 . Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(' '))

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let exists = itCompanies.includes('Facebook')
if(exists){
    console.log('The company found')
}
else {
    console.log('The company is not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method

let oCompanies = []
    for (var i = 0; i < itCompanies.length; i++){
        const company = itCompanies[i]
        const count = company.split('o').length - 1
        if (count > 1) {
            oCompanies.push(company)
        }
    }
console.log(oCompanies)

// 15. Sort the array using sort() method
itCompanies.sort()
console.log('This are the sorted companies', itCompanies)

// 16. Reverse the array using reverse() method
itCompanies.reverse()
console.log('This are the reversed companies', itCompanies)

// 17. Slice out the first 3 companies from the array

itCompanies.splice(0,2)
console.log (itCompanies)

// 18 . Slice out the last 3 companies from the array
let lastThree = itCompanies.slice(-3)
console.log('The last three companies', lastThree )

// 19 . slice out the middle IT company or companies from the array
itCompanies.splice (itCompanies.length - 2, 2)
console.log(itCompanies)

// 20. Remove the first IT company from the array
let remove = itCompanies.shift()
console.log(remove)

// 21. Remove the middle IT company or companies from the array
let deleteOne = itCompanies.shift(5) 
console.log(deleteOne)

// 22. Remove the last IT company from the array
let popOut = itCompanies.pop()
console.log(popOut)

// 23. remove all items from an array 
itCompanies = []
console.log(itCompanies)

/**
 *      Exercise level 2 
 * 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
 */

import { countries} from "./countries.js";
import { webTechs } from './webTechs.js';

console.log(countries)
console.log(webTechs)


// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let removePun = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
let words = removePun.split ('')
let wordCount = words.length 
console.log(wordCount)

// 3. In the following shopping cart add, remove, edit items

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)

// 3.2 add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)

// 3.3. remove 'Honey' if you are allergic to honey

// 3.4 modify Tea with Green Tea 
let index = shoppingCart.indexOf('Tea')
if(index !== -1 ){
    shoppingCart[index] = 'Green Tea'
}
console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let check = countries.includes('Ethiopia')
if (check == true){
    console.log('ETHIOPIA')
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let checkIf = webTechs.includes('Sass')
if(checkIf == true){
    console.log('SASS')
}
else {
    webTechs.push('Sass')
}
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


/**
 * Exercise: Level 3

 */
// 3.1 Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sorted = ages.sort()
console.log('This are the ages that are sorted : ', sorted)

// 3.2 Find the median age(one middle item or two middle items divided by two)
let median; 
if (ages.length%2 !== 0){
    let middleIndex = Math.floor(ages.length/2)
    median = ages[middleIndex]
}
else {
    let middleIndex = Math.floor(ages.length / 2)
    median = (ages[middleIndex] + ages[middleIndex - 1]) /2 
}
console.log(median)
