"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Nora Hammons
      Date:   3/25/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div #quiz input");

//onclick calls anonymous function that sets class attribute
//of overlay object to "showquiz" and repeats countdown every 1 second
//storing time in timeID
document.getElementById("startquiz").onclick = function () {
   document.getElementById("overlay").classList.remove("hidequiz");
   document.getElementById("overlay").classList.add("showquiz");
   timeID = setInterval(countdown, 1000);
}

function countdown() {
   if (timeLeft === 0) {
      clearInterval(timeID);
      var totalCorrect = checkAnswers();

      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You have " + totalCorrect + " / " + correctAnswers.length + " correct. Your score is 100%!")
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         document.getElementById("overlay").classList.remove("showquiz");
         document.getElementById("overlay").classList.add("hidequiz");
      }
      else {
         var incorrectAnswers = correctAnswers.length - totalCorrect;
         alert("You have " + incorrectAnswers + " incorrect answers out of " + correctAnswers.length + " questions on the quiz." +
            " Your score is " + totalCorrect / correctAnswers.length *100+ "%.");
         
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         document.getElementById("overlay").classList.remove("showquiz");
         document.getElementById("overlay").classList.add("hidequiz");
      }
   }
   else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
 
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

