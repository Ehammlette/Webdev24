"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nora Hammons
      Date:   4/23/2024

      Filename: project12-03.js
*/


$('article > h2').click(function() {

      var heading= document.querySelector('article > h2');

      var list= heading.nextElementSibling;

      var headingImage= heading.querySelector('img');

      $(list).slideToggle(500);

      const src = $(headingImage).attr('src');
      
  if (src === 'plus.png') {
    headingImage.setAttribute('src', 'minus.png');
  } else {
    headingImage.setAttribute('src', 'plus.png');
  }
});