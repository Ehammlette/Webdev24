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

// onclick add event listener
document.getElementById("chicken").addEventListener("click",calcTotal);
document.getElementById("halibut").addEventListener("click",calcTotal);
document.getElementById("burger").addEventListener("click",calcTotal);
document.getElementById("salmon").addEventListener("click",calcTotal);
document.getElementById("salad").addEventListener("click",calcTotal);

//calculate cost
function calcTotal(){
   let cost=0;

   //Finding out if elements are checked marked
   var buyChicken = document.getElementById("chicken").checked;
   var buyHalibut = document.getElementById("halibut").checked;
   var buyBurger = document.getElementById("burger").checked;
   var buySalmon = document.getElementById("salmon").checked;
   var buySalad = document.getElementById("salad").checked;

   //add the cost of the chicken if purchased
   cost += buyChicken ? CHICKEN_PRICE :0;

   //add the cost of the halibut if purchased
   cost += buyHalibut ? HALIBUT_PRICE:0;

   //add the cost of the burger if purchased
   cost += buyBurger ? BURGER_PRICE:0;

   //add the cost of the salmon if purchased
   cost += buySalmon ? SALMON_PRICE:0;

   //add the cost of the salad if purchased
   cost += buySalad ? SALAD_PRICE:0;

   //setting final sales stuff
   document.getElementById("foodTotal").innerHTML= formatCurrency(cost);

   //sales tax
   let tax= cost*SALES_TAX;

   //setting element foodTax
   document.getElementById("foodTax").innerHTML= formatCurrency(tax);

   //total cost calculation
   var totalCost = cost+tax;

   //setting element total cost
   document.getElementById("totalBill").innerHTML= formatCurrency(totalCost);
}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
