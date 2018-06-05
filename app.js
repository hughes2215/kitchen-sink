var name = "Billy";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const numberofstates = 50;
console.log(sayHello());

var equals = 5 + 4;

//this is the allows the first letter to be selected and decides if it starts with the letter L
if (name.charAt(0) > "L") {
    alert("Back of the line!");
} else {
    alert("You're Next!");
}

//this is the alert tha displays hello world
function sayHello(){
  alert("hello world");
}

//this checks to see age

function checkAge(){
    if (age < 21){
        alert("Sorry {{{toMarkdown}}}name{{{toMarkdown}}}, you aren't old enough to view this page!");
    }
    else{
        alert("You can drink anything");
    }
    console.log(checkAge("Charles",21))
console.log(checkAge("Abby",27))
console.log(checkAge("James",17))
console.log(checkAge("John",18))

// my favortie veggies in an array

var favoriteVegstables = ['carrota', 'corn', 'green beens', 'onion', 'beats'];

for (v = 0; v < favoriteVegstables.length; v++){
    console.log(favoriteVegstables[v]);
}

//names and ages for people 

var people = [
    {name: "Josh",
    age: 16},

    {name: "Don",
    age: 93},

    {name: "Bobbito",
    age: 23},
  
    {name: "Samantha",
    age: 11},

    {name: "Fran",
    age: 55 },
];

for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// makes any word argument


function getlength(word) {
    return word.length;
}
var number = ("Hello World!")

let anyWord = getLength('Hello World');

let test = anyWord % 2

if (test == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
}