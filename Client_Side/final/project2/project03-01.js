/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Nora Hammons
      Date:   4/29/2024

      Filename: project03-01.js
*/

//declare menuItems
let menuItems=document.getElementsByClassName("menuItem");

//for loop
for(let i=0; i<menuItems.length; i++){
      menuItems[i].addEventListener("click", calcTotal);
}

//function calcTotal
function calcTotal(){
      let orderTotal = 0;

      // Loop through the menuItems collection
      for (let i = 0; i < menuItems.length; i++) {
          // Apply an if statement that tests whether the item has been checked
          if (menuItems[i].checked) {
              // Increase the value of the orderTotal variable by the value of menuItems[i]
              orderTotal += Number(menuItems[i].value);
          }
      }
  
      // Change the innerHTML property of the element with the id "billTotal"
      // to the value returned by the formatCurrency() function using orderTotal as the parameter value.
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }