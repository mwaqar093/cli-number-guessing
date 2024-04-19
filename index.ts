#! /usr/bin/env node
import inquirer from "inquirer";

// 1)computer will generate a random number
// 2)user input for guessing number
// 3)compare user input with computer guessing number and show result

const randomNumber = Math.floor(Math.random() * 6+1);
console.log("Welcome To Number Guessing Game");

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 6: ",

    },
]);

if (answer.userGuessNumber === randomNumber){
    console.log("Congratulations! You Guessed Right Number");
}else{
    console.log("You Guessed Wrong Number");
}