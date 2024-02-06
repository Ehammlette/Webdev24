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
window.addEventListener("load",setupForm);

function setupForm()
{
document.getElementById("photoNum").value=1;
document.getElementById("photoHrs").value=2;
document.getElementById("makeBook").checked=false;
document.getElementById("photoRights").checked=false;
document.getElementById("photoDist").value=0;
}

function getEstimate()
{
      
}

System.out.print();