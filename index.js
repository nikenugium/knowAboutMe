var readlineSync = require("readline-sync");
var chalk = require("chalk");
var enterName = readlineSync.question("Welcome to the Quiz. Please enter your name : ");

console.log("Welcome " + chalk.bold(enterName) + " to " + chalk.bgCyan.black.bold("DO YOU KNOW ME!"));
console.log(" ");
readlineSync.question(chalk.red("Press any key to begin.... "));
console.log(" ");

var score = 0;
var score2 = 0;

var questionPannel = [
  {
    question : "What is my name? ",
    answer : "Saksham"
  },
  {
    question : "What do I like to do most? ",
    answer : "Outdoor Activities"
  },
  {
    question : "Where do I live? ",
    answer : "Sonipat"
  },
  {
    question : "Who is my favorite Artist? ",
    answer : "Ritviz"
  },
  {
    question : "Which is my favorite movie? ",
    answer : "Wolf of wall street"
  }
]

function quizQnA(question,answer){
  var inputAns = readlineSync.question(question);
  if (inputAns.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You are right!!"));
    console.log(" ");
    score = score + 1;
  } else {
    console.log(chalk.red("Oops! You are wrong. The correct answer is : ") + chalk.green(answer));
    console.log(" ");
  }
  console.log(`-------------------
`);
  
}

playAgain();

function playAgain() {
  for(var i = 0 ; i < questionPannel.length ; i++){
    quizQnA(questionPannel[i].question,questionPannel[i].answer);
  }
  var Pagain = readlineSync.question("Do you want to continue? Y or N : ");
  if(Pagain.toUpperCase() === "Y"){
    console.clear();
    if(score > score2){
      score2 = score;
    }
    // console.log("Your current score " + score2);
    score = 0;
    playAgain();
  }
}


console.log(" ");
console.log(chalk.yellow.bold("Your score current is " + score));
console.log(" ");
console.log(chalk.yellow.bold("Personal best : " + score2));