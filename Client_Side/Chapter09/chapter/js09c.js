"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage
      Author: Nora Hammons
      Date: 4/22/2023
      
      Filename: js09c.js
 */

      //Eating Well Preference Keys
      let keys= ["name", "email", "phone", "address", "city", "state", "zip", "allergies", "frequency", "size"];

      for (let item of keys) {
          let newRow = document.createElement("tr");

          //Display the storage key
          let keyCell= document.createElement("td");
          keyCell.textContent = item;
          newRow.appendChild(keyCell);

          //Display the key value
          let keyValue = document.createElement("td");
          keyValue.textContent= localStorage.getItem(item);
          newRow.appendChild(keyValue);

          //Append each key=name pair as a table row
          document.getElementById("prefTable").appendChild(newRow);
      }

      //Remove Eating
