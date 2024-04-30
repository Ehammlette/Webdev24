/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Nora Hammons
      Date:   4/29/2024

      Filename: project03-01.js
*/

//declare menuItems
let menuItems=getElementsByClassName(menuItem);

//for loop
for(let i=0; i<menuItems.length; i++){
      menuItems[i].addEventListener('click', calcTotal);
}

document.getElementById("billTotal").innerHTML=formatCurrency(orderTotal);

//function calcTotal
function calcTotal(){
      let orderTotal=0;

      if (menuItems[i].checked) {
            // Increase orderTotal by the value of menuItems[i]
            orderTotal += Number(menuItems[i].value);
        }
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }