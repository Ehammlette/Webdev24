"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Nora Hammons
      Date:   4/19/2024

      Filename: project09-01b.js
*/

var query = location.search.slice(1);

var decodedQueryString = decodeURIComponent(query.replace(/\+/g, ' '));

var cardFields = decodedQueryString.split('&');

for (let item of cardFields) {
      // Split each item at the location of the = character
      let nameValue = item.split('=');
      
      // Store the first item in the nameValue array in the name variable
      let name = nameValue[0];
      
      // Store the second item in the nameValue array in the value variable
      let value = nameValue[1];
      
      // Store the value of the value variable as the text content of the document element with an id equal to the name variable
      document.getElementById(name).textContent = value;
  }