/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Nora Hammons
      Date:   4/29/2024

      Filename: project02-04.js
 */
   let CHICKEN_PRICE = 10.95  
   let HALIBUT_PRICE = 13.95  
   let BURGER_PRICE = 9.95  
   let SALMON_PRICE = 18.95  
   let SALAD_PRICE = 7.95
   let SALES_TAX = 0.07

   window.addEventListener("load", test);

   function test(){
      calcTotal();

      document.getElementById("number1").onchange=calcTotal;
   }


//calculate cost
function calcTotal(){
   let cost=0;
   var buyChicken = document.getElementById("chicken").checked;
   if (buyChicken)
   {
      document.getElementById("totalBill")=buyChicken;
   }

}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
