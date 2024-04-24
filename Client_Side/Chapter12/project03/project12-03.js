"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nora Hammons
      Date:   4/23/2024

      Filename: project12-03.js
*/


document.querySelector('article > h2').addEventListener("click",function(){

      var heading= event.target;

      var list= heading.nextElementSibling;

      var headingImage= heading.querySelector('img');

      //Toggel the list using slideToggle
      list.style.transition = 'height 0.5s ease';
      list.style.height = list.offsetHeight === 0 ? `${list.scrollHeight}px` : 0;

      const src = headingImage.getAttribute('src');
      if (src === 'plus.png') {
        headingImage.setAttribute('src', 'minus.png');
      } else {
        headingImage.setAttribute('src', 'plus.png');
      }

});