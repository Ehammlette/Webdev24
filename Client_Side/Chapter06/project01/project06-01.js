"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Nora Hammons
      Date:   3/31/2024

      Filename: project06-01.js
*/

 //declaring submit button is referencing Element submitButton
 let submitButton = document.getElementById("submitButton");
//declaring pwd is referencing Element pwd
 let pwd = document.getElementById("pwd");
 //declaring pwd2 is referencing Element pwd2
 let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
      if(pwd.value.length < 8 || /^[A-Za-z0-9]*$/g.test(pwd.value)===false)
      {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
      }
      else if(pwd.value != pwd2.value && /^[A-Za-z0-9]*$/.test(pwd.value) && pwd.value.length >= 8)
      {
            pwd2.setCustomValidity("Your passwords must match");
      }
      else
      {
          pwd.setCustomValidity("");
      }
});