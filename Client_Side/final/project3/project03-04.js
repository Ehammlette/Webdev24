/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Nora Hammons
      Date:   4/29/2024

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

//starImages
function starImages(rating) {
      // Declare a variable named imageText, setting its initial value to an empty text string
      let imageText = '';
  
      // Create a for loop to generate star images based on the rating parameter
      for (let i = 1; i <= rating; i++) {
          // Add star image tags to the imageText variable
          imageText += "<img src='star.png' alt=''>";
      }
  
      // Return the value of imageText from the function
      return imageText;
  }
  
  // Assuming the reviewers array is defined elsewhere in your code
  for (let i = 0; i < reviewers.length; i++) {
      let reviewCode = '';
  
      // Add table opening tag based on reviewType
      if (reviewType[i] === "P") {
          reviewCode += "<table class='prime'>";
      } else if (reviewType[i] === "N") {
          reviewCode += "<table class='new'>";
      } else {
          reviewCode += "<table>";
      }
  
      // Add HTML code for table rows and data cells
      reviewCode += "<tr><th>Review Titles[" + i + "]</th><td>" + reviewers[i] + "</td></tr>";
      reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
      reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
  
      // Add table closing tag
      reviewCode += "</table>";
  
      // Insert the value of the reviewCode variable into the first <article> tag in the document
      document.getElementsByTagName('article')[0].insertAdjacentHTML('beforeend', reviewCode);
  }
  