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