/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Nora Hammons
     Date:   2/20/2024

     Filename: js03.js
 */

     //Days of the Week
     let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     window.addEventListener("load",showGames);
     window.addEventListener("load", addWeekDays);

     function showGames()
     {
        for (let i=0; i <gameDates.length; i++)
        {
            let gameInfo = "";

            //Open the paragraph
            gameInfo += "<p>";

            //Include the opponent
            gameInfo += gameOpponents[i] + "<br>";

            //Include result and score
            gameInfo += gameResults[i]+ ": (" + runsScored[i] + 
            " - " + runsAllowed[i] + ")";

            //Close the paragraph
            gameInfo += "</p>";

            //Write the information into a table cell 
            let tableCell = document.getElementById(gameDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
     }

