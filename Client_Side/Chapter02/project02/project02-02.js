/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nora Hammons
      Date:   2/4/2024

      Filename: project02-02.js
 */

//verify if form is filled as a function and will display thank you or will tell you to fill the fields
function verifyForm()
{
      let name= document.getElementById("name").value;
      let email= document.getElementById("email").value;
      let phone= document.getElementById("phone").value;

      if (name && email && phone)
      {
            window.alert("Thank you!");
      }
      else
      {
            window.alert("Please fill in all fields");
      }
}

//listens to submit button to be clicked then, once done so, it will run function verifyForm()
document.getElementById("submit").addEventListener("click", verifyForm);