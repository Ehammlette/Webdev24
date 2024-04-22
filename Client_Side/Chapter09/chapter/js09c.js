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

      //Remove Eating Well keys when the Remove Preference button is clicked
      document.getElementById("removePrefBtn").onclick=function(){
        for (let item of keys) {
            localStorage.removeItem(item);
        }
      }

      function writeCookie(name, value, expData, path, domain, secure){
        if (name && value){
            let cStr = name + "=" + encodeURIComponent(value);
            if (expData) cStr += ";expires" + expData.toUTCString();
            if (path) cStr += ";path=" +path;
            if(domain) cStr += ";domain=" + domain;
            if (secure) cStr += ";secure";
            document.cookie = cStr;
         }
      }

      function readCookie(){
        let fields = {};

        if(document.cookie) {
            let cookieList = document.cookie.split("; ");

            for (items of cookieList){
                let cookie = items.split("=");
                let name=cookie[0];
                let value = decodeURIComponent(cookie[1]);
                fields[name]=value;
            }

            return fields;
        }
      }
