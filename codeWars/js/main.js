//Abbreviate a Two Word Name
const abbrevName = name =>{
  let first = name.toUpperCase().split(" ")[0][0]
  let last = name.toUpperCase().split(" ")[1][0]
  return `${first}.${last}`
}

// function abbrevName(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

//Highest and Lowest!
function highAndLow(numbers){
  let sortedNums = numbers.split(' ').sort((a,b) => a-b)
  return `${sortedNums[sortedNums.length -1]} ${sortedNums[0]}`
}

//validate code with simple regex
validateCode = (code) => Number(code.toString()[0]) <= 3 ? true : false;
//Convert a String to a Number!
let stringToNumber = (str) => Number(str);

// Remove First and Last Character Part Two
function array(arr){
  let fix = arr.split(',').slice(1, -1).join(' ')
  return fix == false ? null : fix;
}

//Name Shuffler
const nameShuffler = str => str.split(' ').reverse().join(' ')

//Simple Comparison?
const add = (a, b) => a == b ? true : false;

//Thinkful - Logic Drills: Traffic light
updateLight = (current) => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';

//Number toString
var a = (123).toString()

//Grasshopper - Object syntax debug
var rooms = {
  first: {
    description: 'This is the first room',
    
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
      }
  },
    
  second: {
    description: 'This is the second room',
    
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

//Template Strings
TempleStrings = (obj, feature) => `${obj} are ${feature}`

//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr,n){
  let round = arr.map(e => +e.toFixed(2))
  let count = 0
  round.forEach(e => e < n ? count++ : count)
  return count;
  
}

//Coding Meetup #11 - Higher-Order Functions Series - Find the average age
function getAverageAge(list) {
  let ages = []
  list.forEach(i => ages.push(i.age));
  
  return Math.round(ages.reduce((ac, cv) => ac + cv) / ages.length);
  
}
//function getAverageAge(list) {
//   return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
// }

//Welcome!
function greet(language) {
  const greetDatabase = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }

  const greeting = greetDatabase[language];
  return greeting || greetDatabase.english;
}

//Alan Partridge II - Apple Turnover
apple = x => Number(x*x) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";

//You Can't Code Under Pressure #1
doubleInteger = i => i * 2;

//Squash the bugs
function findLongest(str) {
    
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
      return longest
  }

//Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b

//Grasshopper - Terminal Game #1
function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }

//Regular Ball Super Ball
var Ball = function(ballType) {
  if(ballType == undefined){
    this.ballType = "regular"
  }else{
    this.ballType = ballType;
  }
};
//FIXME: Get Full Name
class Dinglemouse{

    constructor (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName () {
      if(this.firstName && this.lastName){
        return `${this.firstName} ${this.lastName}`;
      }else{
        return `${this.firstName}${this.lastName}`;
      }     
    }
  }
//Lario and Muigi Pipe Problem
function pipeFix(numbers){
    let fix = []
    for(let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
      fix.push(i)
    }
    return fix;
  }
//Object Oriented Piracy
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;  
     this.isWorthIt = function (){
       return this.draft - (this.crew * 1.5) > 20 ? true : false;
     };
   }
 //Filter out the geese
 function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird))
  };
//UEFA EURO 2016
function uefaEuro2016(teams, scores){
    let a = teams[0]
    let b = teams[1]
    if( scores[0] == scores [1] ){
      return `At match ${a} - ${b}, teams played draw.`
    }else {
      let winner = scores[0] > scores[1] ? a : b;
      return `At match ${a} - ${b}, ${winner} won!`
    }
  }
//MakeUpperCase
const makeUpperCase = (str) => str.toUpperCase()

//Grasshopper - Summation
var summation = (num) => {
    let summedNum = 0
    for(let count = 1; count <= num; count++){
      summedNum = summedNum + count
    }
    return summedNum;
  }

//Grasshopper - Terminal game move function
  function move (position, roll) {
    return (roll * 2) + position;
  }
//Grasshopper - Personalized Message
function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest'
  }
//Training JS #10: loop statement --for
function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        even.push(arr[i])
      }else{
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }
//Pre-FizzBuzz Workout #1
function preFizz(n) {
    let arr = []
    for (let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }
//Switcheroo
function switcheroo(x){
    let sort = x.split('')
    return sort.map(e => e == 'a' ? 'b': e == 'b' ? 'a' : e ).join('')
  }
//Spoonerize Me
function spoonerize(words) {
    let split = words.split(' ')
    let newA = split[1].slice(0, 1) + split[0].slice(1, )
    let newB = split[0].slice(0, 1) + split[1].slice(1, )
    return newA + ' ' + newB
}
//Century From Year
function century(year) {
    let century = year.toString().slice(0, -2)
    if (year.toString().slice(-2) === '00'){
      return Number (century)
    }else{
      return Number(century) + 1
    }
  }
//Transportation on vacation
function rentalCarCost(d) {
    let total = d * 40
    return d > 6 ? total - 50 : d > 2 ? total - 20 : total;
  }
//Beginner - Lost Without a Map
function maps(x){
    return x.map( i => i * 2 )
    }
//Beginner - Reduce but Grow
function grow(x){
    return x.reduce( (acc, cv) => cv * acc)
  }
//ES6 string addition
function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }
//Grasshopper - Order of operations
function orderOperations () {
    return (2 + 2) * (2 + 2) * 2
  }
//Power
function numberToPower(number, power){
    let result = 1
    for (let i = 0; i < power; i++ ) {
     result = result * number
      }
    return result
  }
//Grasshopper - Function syntax debugging
function main (verb, noun){
    return verb + noun
  }
//Aspect Ratio Cropping - Part 1
function aspectRatio(x,y){
    let ratio = 16 / 9
    x = (ratio * y)
    let aspectArr = [Math.ceil(x), y]
    return aspectArr
  }
//Push a hash/an object into array
let items = []
items.push({a: "b", c: "d"})
//Short Long Short
let solution = (a, b) => a.toString().length < b.toString().length ? a+b+a : b+a+b;
//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return a ^ b ? true : false;
}

//Two to One
function longest(s1, s2) {
  let combinedString = s1+s2
  let arr = combinedString.split('')
  let sortArr = arr.sort()
  let newArr = []
  sortArr.forEach( (x) => {
    if (!newArr.includes(x)) {
      newArr.push(x);
    }
  })
  return newArr.join('')
}
//Training JS #8: Conditional statement--switch
function howManydays(month){
  let days = 31
  switch (month){
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
  }
  return days;
}
//Are arrow functions odd?
function odds(values){
  return values.filter( i => i % 2);
}
//Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5
  return total
}
//Invert values
function invert(array) {
  return array.map(i => -i)
}
//NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  return mpg == 0 ? 0 : Math.round( ((ppg / mpg) * 48) * 10 ) / 10
}
//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool == true ? 'Yes' : 'No';
}
//Plural
function plural(n) {
  return n == 1 ? false : true;
}
//Evens and Odds
function evensAndOdds(num){
  num = Math.abs(num)
  if(num % 2 === 0){
    return num.toString(2)
  }else{
    return num.toString(16)
  }
}
//Incorrect division method
const solve = (x, y) => x / y
//Do I get a bonus?
function bonusTime(salary, bonus) {
  if(bonus == true){
    salary = salary * 10
    } return "£" + salary.toString()
  }
//Kata Example Twist
var websites = []

while(websites.length < 1000){
  websites.push('codewars')
}
//Is he gonna survive?
function hero(bullets, dragons){
  return bullets >= dragons * 2 ? true : false;
  }
//Convert a Number to a String!
numberToString = (num) => num.toString()

//Find the Remainder
function remainder(a, b){
  return a > b ? a%b : b%a
  
}

//Function 3 - multiplying two numbers
let multiply = (a, b) => a*b

//Return Negative
function makeNegative(num) {
  if(num > 0){
    return (0 - num)
  } else {return num
  } 
}
function makeNegative2(num) {
  return num < 0 ? num : -num;
}

//Get the mean of an array
function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}

//Semi-Optional
function wrap(value) {
  let wrappedObj = {};
  wrappedObj.value = value
  return wrappedObj
}

//Shifty Closures
function greet_abe() {
  let name = 'Abe';
  return 'Hello, ' + name + '!';
};

function greet_ben() {
  let name = 'Ben';
  return 'Hello, ' + name + '!';
};

//Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

//Function 2 - squaring an argument
const square = n => n*n

//How much coffee do you need?
function howMuchCoffee(events) {
  const coffees = events.map(i => i.match(/other/g) ? 0
                             : i.match(/OTHER/g) ? 0
                             : i == i.toUpperCase()? 2 
                             : i == i.toLowerCase()? 1
                             : 0);

  const total = coffees.reduce((acc, cV) => {
    return acc + cV;
  }, 0);
  return (total > 3 ? 'You need extra sleep' : total);
}

//My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse()
}

//Function 1 - hello world
let greet = () => "hello world!"

//How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

//Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

//Basic Training: Add item to an Array
websites.push('codewars')

//Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

//Reversed Strings
function solution(str){
  return str.split('').reverse().join('')
}

//Remove String Spaces
function noSpace(x){
  return x.split(' ').join('')
}

//Return to Sanity
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

//Opposite number
function opposite(number) {
  return -number;
}

//Remove First and Last Character
function removeChar(str){
  return str.slice(1, -1)
 
 };

//Even or Odd
function even_or_odd(number) {
  return number % 2===0 ? "Even" : "Odd";
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//Mr. Freeze
Object.freeze(MrFreeze)

//Parse nice int from char problem
function getAge(inputString){
  return Number(inputString.charAt(0))
  }

//get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c)
}

//Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs((a[0]*a[1]*a[2])-(b[0]*b[1]*b[2]))
}

//Get decimal part of the given number
function getDecimal(n){
  n = Math.abs(n);
  return n - Math.floor(n);
}

//L1: Bartender, drinks!
function getDrinkByProfession(param){
  return param.toLowerCase() === "jabroni" ? "Patron Tequila"
  : param.toLowerCase() == "school counselor" ? "Anything with Alcohol"
  : param.toLowerCase() == "programmer" ? "Hipster Craft Beer"
  : param.toLowerCase() == "bike gang member" ? "Moonshine"
  : param.toLowerCase() == "politician" ? "Your tax dollars"
  : param.toLowerCase() == "rapper" ? "Cristal"
  : "Beer";
}

//Convert a Boolean to a String
function booleanToString(b){
  return b.toString()
}

//Super Duper Easy
function problem(x){
  return (typeof x === "string") ? "Error" : (x * 50) + 6;
}

//Quarter of the year
const quarterOf = (month) => {
  return month <= 3 ? 1 
  : month <= 6 ? 2
  : month <= 9 ? 3
  : 4;
}

//Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let grade = (s1 + s2 + s3) / 3;
  if (grade >= 90){return 'A'}
  else if (grade >= 80){return 'B'}
  else if (grade >= 70){return 'C'}
  else if (grade >= 60){return 'D'}
  else{return 'F'}
}

//Square(n) Sum
function squareSum(numbers){
  return numbers.reduce( (ac, cv) => (ac = Math.pow(cv, 2) + ac), 0);

}

//Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r,g,b){
  var r = r.toString(16)
  var g = g.toString(16) 
  var b = b.toString(16)
  r = r.length == 1 ? "0"+ r : r;
  g = g.length == 1 ? "0" + g : g;
  b = b.length == 1 ? "0" + b : b;
  
  return "#" + r + g + b
}

//Sum of positive
function positiveSum(arr) {
  return arr.reduce( ((a, cV) => cV > 0 ? cV + a : a), 0)
}

//Calculate BMI
function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2)
  if (bmi <= 18.5){
    return "Underweight"
  }else if (bmi <= 25.0){
    return "Normal"
  }else if (bmi <= 30.0){
    return "Overweight"
  } else if (bmi > 30){
    return "Obese"
  } 
}

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  let pages = (n * m);
  if (n < 0 || m < 0){
    pages = 0
  }
  return pages;  
}
