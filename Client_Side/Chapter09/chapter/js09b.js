"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Nora Hammons
      Date:   4/16/2024
      
      Filename: js09b.js
 */

// Retrieve the text of the query string
let qString = location.search.slice(1);

//Replace the encoded characters in the query string
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

console.log(qString);
