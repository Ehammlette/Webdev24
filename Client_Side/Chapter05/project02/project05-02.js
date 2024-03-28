"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Nora Hammons
      Date:   3/28/2024

      Filename: project05-02.js
*/

//collect all the node images in img tag
let images = document.querySelectorAll("img");

//The photoBucket variable referencing the element with the id “photo_bucket”
let photoBucket = document.getElementById("photo_bucket");

//The photoList variable referencing the element with the id “photo_list”
let photoList = document.getElementById("photo_list");

for (var i=0; i< images.length; i++)
{
      //incites images
      var image =images[i];

      //add click event listener to each image
      image.addEventListener("click", function(){
            //check if parent element of the clicked image has the same id as photo_bucket
            if(this.parentElement.id=== "photo_bucket")
            {
                  //if true, create a new list item element
                  var newItem = document.createElement("li");
                  //Append the clicked image to the new list item
                  newItem.appendChild(this);
                  //append the new list item to the photoList
                  photoList.appendChild(newItem);
            }
            else {
                  // If the parent element is not photo_bucket
                  // Declare a variable named oldItem equal to the parent element of the clicked image
                  var oldItem = this.parentElement;
                  //Append the clicked image back to the photoBucket
                  photoBucket.appendChild(this);
                  //Remove old Item form it's parent element
                  oldItem.parentElement.removeChild(oldItem);
            }
      });

}