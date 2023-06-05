/**
 * 1. array can store multiple values
 * 2. Each value in an array has an index, and each index has a reference in a memory address.
 * 3. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.
 * 4. An array is a collection of different data types which are ordered and changeable(modifiable).
 * 5. It is very common to use const instead of let to declare an array variable.
 * 
 */
// Two methods for creating an empty array 
let arr = Array()
console.log(arr)

const arr2 = []
console.log(arr2)

//How to create an array with values
const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log('This are the list of fruits in our store: ', fruits)

const skills = ['HTML', 'Css', 'js', 'React']
console.log('This are my personal skills:', skills)

//Array can have items of different data types
const student = [
    'Leuel',
    '23',
    'college graduate',
    'Software developer',
    { country: 'Ethiopia', city: 'Dessie' },
    { skills: ['HTML', 'Css', 'js', 'React'] }

]
console.log('full information of the :', student)

// Accessing array items using index
const Fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = Fruits[0]
console.log(Fruits)
// Accessing last item from the list of Items in the array 
let lastIndex = Fruits.length - 1
console.log(Fruits[lastIndex])

// Modifying array element
let numbers = [1, 2, 3, 4]
numbers[0] = 20
numbers[numbers.length - 1] = 10

console.log(numbers)

//Methods to manipulate array
// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//Array:To create an array.
const eightEmptyValues = Array(8) // this creates 8 empty array elements
console.log(eightEmptyValues)

//fill: Fill all the array elements with a static value

let eightXValues = Array(8).fill('x')
console.log(eightXValues)

// Concatenating array using concat
const firstList = [1, 2, 3, 4]
const secondList = [5, 6, 7, 8]
const merge = firstList.concat(secondList)
console.log(merge)

//Getting index an element in arr array
let num = [1, 2, 3, 4]
console.log(num.indexOf(4))

//Check items in a list
const indexOfAvocado = ['banana', 'orange', 'mango', 'avocado', 'lemon']
let index = indexOfAvocado.indexOf('avocado')
console.log(index)
//Getting last index of an element in array
let num2 = [1, 2, 3, 1, 4, 5, 2]
console.log(num2.lastIndexOf(2))
console.log(num2.lastIndexOf(1))

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
let webTechs = ['html', 'css', 'js', 'react']
console.log(webTechs.includes('html5'))

//Array.isArray:To check if the data type is an array
let num3 = [1, 2, 3, 4, 5, 6]
console.log(Array.isArray(num3))

//toString:Converts array to string
let num4 = [1, 2, 3, 4, 5, 6]

//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
let Skills = ['communication', 'tolerance', 'problem Solving']
console.log(Skills.join(" # "))

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const num5 = [1, 2, 3, 4, 5, 6]
console.log(num5.slice(1, 4))


/**
 * focus point : Push: adding item in the end. To add item to the end of an existing array we use the push method.
 */
const newArr = ['item1', 'item2', 'item3']
newArr.push('new item')
console.log(newArr)

// pop: Removing item in the end.
const DeleteArr = ['item1', 'item2', 'item3', 'item4']
DeleteArr.pop()
console.log(DeleteArr)

//shift: Removing one array element in the beginning of the array.
let remove = ['item1', 'item2', 'item3', 'item4']
remove.shift()
console.log(remove)

//unshift: Adding array element in the beginning of the array.
let num6 = [1,2,3,4,5,6]
num6.unshift(0)
console.log(num6)

//reverse: reverse the order of an array.
let items =  ['item1', 'item2', 'item3', 'item4']
    items.reverse()
        console.log(items)


//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const items2 =  [
    'Html',
    'Css',
    'Js',
    'React',
    'Php',
    'MongoDB'
]
    items2.sort()
    console.log(items2)

/**
 * Array of arrays
    Array can store different data types including an array itself. Let us create an array of arrays
 */
const frontEnd = ['Html','Css','Js','React',]
const backEnd = ['Php','MongoDB','node', 'Express']
const fullStack = [frontEnd, backEnd]

console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])