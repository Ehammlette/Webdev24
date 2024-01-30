/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   1/23/2024

    Filename: project.js
*/

let correct_answer=true;

//statement if answer is correct
let t_answerStatement= "You answered correctly";

//statement if answer is false
let f_answerStatement= "You are incorrect";

//statement
let answerStatement= "Null";

// start game function on start of game
window.addEventListener("load",startGame1)

//set values
let answer=1;
//see if puzzle is solved


function startGame1()
{
    
    if("combination_lock"===1)
    {
        correct_answer=true;
        //console.log(correct_answer); test in console
        answerStatement = t_answerStatement;
    }
    else
    {
    //console.log(correct_answer); test in console
    answerStatement = f_answerStatement;
    }

}

