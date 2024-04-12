"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Nora Hammons
      Date:   4/11/2024

      Filename: project07-01.js
*/
var signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {

      var regex1 = /[A-Z]/;
      var regex2 = /[0-9]/;
      var regex3 = /[!\$#%]/;
      let pwd = document.getElementById("pwd").value;
      let feedback = document.getElementById("feedback");

      e.preventDefault();

      if (pwd.length < 8) {
            feedback.textContent = "Your password must be at least 8 characters.";
      }
      else if (pwd.length >= 8 && regex1.test(pwd) === false) {
            feedback.textContent = "Your password must include an uppercase letter.";
      }
      else if (pwd.length >= 8 && regex2.test(pwd) === false) {
            feedback.textContent = "Your password must include a number.";
      }
      else if (pwd.length >= 8 && regex3.test(pwd) === false) {
            feedback.textContent = "Your password must include one of the following: !$#%";
      }
      else {
            signupForm.submit();
      }

});

