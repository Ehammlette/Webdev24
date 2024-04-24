"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nora Hammons
      Date:   4/23/2024

      Filename: project12-03.js
*/


$('article > h2').click(function () {

      var heading = $(this);

      var list = heading.next();

      var headingImage = heading.find('img');

      $(list).slideToggle(500);

      var src = $(headingImage).attr('src');

      if (src === 'plus.png') {
            headingImage.attr('src', 'minus.png');
      } else {
            headingImage.attr('src', 'plus.png');
      }
});