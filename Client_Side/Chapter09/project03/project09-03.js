"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Nora Hammons
      Date:   4/22/2024

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

// Check if localStorage.sbloggerVisit exists
if (localStorage.sbloggerVisit) {
      // Retrieve the value of the sbloggerVisit key and save it to storedLastDate
      var storedLastDate = localStorage.sbloggerVisit;

      // Update the text content of lastVisitDate object with storedLastDate
      lastVisitDate.textContent = storedLastDate;

      // Parse the storedLastDate string into a Date object
      var lastDate = new Date(storedLastDate);

      // Iterate through each item in the articleDates collection
      for (const articleDateText of articleDates) {
            // Declare the articleDate variable storing a Date object containing the date text
            var articleDate = new Date(articleDateText);

            // Check if articleDate is greater than lastDate
            if (articleDate > lastDate) {
                  // If the article was posted after the user's last visit, add "<strong>new</strong>" to its HTML content
                  articleDateText.innerHTML += "<strong>new</strong>";
            }
      }


}
else {
      lastDate = null;

      lastVisitDate.textContent = "Welcome to SBlogger!"

      // Iterate through each item in the articleDates collection
      for (const articleDateText of articleDates) {
            // Add "<strong>new</strong>" to the HTML content of each item in the articleDates collection
            articleDateText.innerHTML += "<strong>new</strong>";
      }
}

var currentDate = new Date("9/12/2024");

localStorage.sbloggerVisit = currentDate.toLocaleDateString();