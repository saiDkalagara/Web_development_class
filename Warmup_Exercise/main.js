// alert("Hello World!") //TO see the alert on the window
console.log("Hello") //To see the output in console
console.error("Error") //To show error 

// asigning values to a constant
//We can declare a varibale by 'let' or 'const'. 
// const is used when we want to keep the value of that variable constant through out the program
// let is used when the variable value can be changed in later steps

const name = "Jhon"
const age = 20
const rating = 3.9
const isCool = true
const x = null

console.log(typeof x)

//string methods

const s = 'Hello World'

console.log(s.toUpperCase()) // to change the string to upper case
console.log(s.toLowerCase()) //to change the string to lower case
console.log(s.substring(0, 5)) //to divide the string based on the position
console.log(s.split('')) //to split the string by letter
console.log(s.split(', ')) //to split the string by space and comma
console.log(s.substring(0, 5).toUpperCase()) //to divide the string based on the position and change it to upper case


//Arrays - varibales that hold multiple values

const fruits = ['apples', 'oranges', 'pears'] //array with list of fruits

fruits[3] = 'grapes' //to add grapes to list at 3rd position

fruits.unshift['starwberries'] //to add at the first position

fruits.push['mangoes'] //to add at the last position

fruits.pop() //to remove from the list

console.log(Array.isArray('hello')) //to check if its array

console.log(fruits.indexOf('oranges')) //to check index of oranges

console.log(fruits) //to print whole lit of fruits


/* multi
line
comment */

//Object Literals : Key value pair

const person = {
    firsName: 'Jackson',
    lastName: 'Mendel',
    age: 40,
    hobbies: ['music', 'movies', 'books'],
    address: {
        street: '59 main st',
        city: 'Boston',
        state: 'MA'
    }

}

console.log(person) //to print whole person details
console.log(person.hobbies) //to print hobbies in person list
console.log(person.firsName, person.lastName) //to print first name and last name of person
console.log(person.hobbies[1]) //to print movies in hobbies
console.log(person.address.city) //to print city in address


const { firstName, lastName, address: { city } } = person //to create varibales and pull out from the list
console.log(firstName)

person.email = 'jhon@gmail.com' //to add email to person

console.log(person.email)

//creating objects of arrays or object literals
const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Going to Office',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].text) //to print text in id 1

console.log(todos)

//json- data format used in fullstack and api development


const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//using loops
//forEach, map, filter
// for(let todo of todos){
//     console.log(todos);
// }

//this is functional programming which is very powerful and used to manipulate data
// const todoCompleted = todos.filter(function(todo){
//    return todo.isCompleted == true
// }) .map(function(todo){
//     return todo.text
// })

// console.log(todoText)

// //consitional statements
// const y = 10;


// if(y == 10){
//     console.log('x is 10')
// } 
// else if(x > 10){
//     console.log('x is greater than 10')
// }
// else {
//     console.log('x is not 10')
// }

//if statement

const k = 20;
const j = 11;

if (k > 5 && j > 10) {
    console.log('k is greater that j')
}

//switch consition statement

const l = 11;

const color = l > 10 ? 'red' : 'blue'

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is NOT red or Blue')
        break;
}

console.log(color)


//function to add 2 numbers - arrow function

const addNums = (num1, num2) => num1 +num2

console.log(addNums(5,4))

//object oriented programing
//constrcutor function

function Person(firstName, lastName, dob) {
    this.firsName = firstName
    this.lastName = lastName
    this.dob = new Date(dob) //using date funtion to get actual date
}

    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear()
    }
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }

//Instantiate object
// const person1 = new Person('Jhon', 'Doe', '4-2-1989')
// const person2 = new Person('Mary', 'Smith', '14-12-1990')

// console.log(person1) //to console log all details of person1
// console.log(person2.firstName) //to console log firstname
// console.log(person1.dob) //to console log dob

// console.log(person1.getBirthYear())
// console.log(person1.getFullName())


//Class
class User {
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob) 
    }
    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person('Deepak', 'Kalagara', '14-11-1995')
const person2 = new Person('Vaishnavi', 'Yalamanchili', '25-11-1995')

console.log(person1.getFullName())
console.log(person1)



//The DOM
//Single element selector
const fname = document.getElementById('fname') //selecting the element by Id
console.log(fname)

// console.log(document.querySelector('.container'))
console.log(document.querySelectorAll ('.item')) //selecting the item by query selector

//Multiple element selector

console.log(document.getElementsByClassName('item')) //selecting the element by class name
console.log(document.getElementsByTagName('li')) //selecting the element by Tag name


const items = document.querySelectorAll('.item') // assigning the item content to a constant

items.forEach((item) => console.log(item)) //using for each function to console log all item elements


//selecting ul
const ul = document.querySelector('.items')

ul.remove()
