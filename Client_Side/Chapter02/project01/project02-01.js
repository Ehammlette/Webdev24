/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nora Hammons
      Date:   2/4/2024

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}
document.getElementById("cValue").onchange = function () 
{
      var cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);

}

function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32
}
document.getElementById("fValue").onchange = function()
{
      var fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}