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