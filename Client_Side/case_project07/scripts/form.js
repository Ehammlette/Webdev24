/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   3/28/2024

    Filename: project.js
*/

/*--------Username and Password Logic--------*/

 //declaring submit button is referencing Element submitButton
 let submitButton = document.getElementById("submitButton");
//declaring pwd is referencing Element pwd
 let pwd = document.getElementById("pwd");
 //declaring pwd2 is referencing Element pwd2
 let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
    if(/^[A-Za-z0-9]*$/.test(pwd.value)===false)
    {
        pwd.setCustomValidity("Your password must have at least one letter and one number.");
    }
      else if(pwd.value.length < 8 )//if password is less then 8 letters/numbers or doesn't have a letter and a number
      {
            pwd.setCustomValidity("Your password must be at least 8 characters.");
      }
      else if(pwd.value != pwd2.value && pwd.value.length >= 8)// if passwords aren't matching
      {
            pwd2.setCustomValidity("Your passwords must match");
      }
      else
      {
          pwd.setCustomValidity("");
      }
});