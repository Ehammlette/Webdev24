/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Nora(ethan) Hammons
      Date:   1/30/2024

      Filename: js02.js
 */

//declare global constants for the application
const EMP_COST = 100; //const photographers per hour
const BOOK_COST = 350; //const of memory book
const RREPRO_COST = 1250; // cost of reproduction rights
const TRAVEL_COST = 2; // cost of travel per mile

//set the form's default values
window.addEventListener("load", setupForm);

function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      //add event handlers for each input control
      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange= getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
}

function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;

      //add the cost of photographers for the hours covered
      totalCost += photographers * hours * EMP_COST;

      //add the cost of distance per photographer per mile
      totalCost += photographers * distance * TRAVEL_COST;

      totalCost += buyBook ? BOOK_COST : 0;

      totalCost += buyRights ? REPRO_COST : 0;

      document.getElementById("estimate").innerHTML = "$" + totalCost;
}

System.out.print(estimate);