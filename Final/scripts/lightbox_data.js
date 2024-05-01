"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "ShowCase";

// Names of the image files shown in the slideshow
let imgFiles = ["image/screenshot/Chapter2_temp.jpg","image/screenshot/Chapter3_analyze.jpg","image/screenshot/Chapter4_analyze.jpg","image/screenshot/Chapter5_extend.jpg","image/screenshot/Chapter6_extend.jpg","image/screenshot/Chapter7_analyze.jpg","image/screenshot/Chapter9_apply.jpg","image/screenshot/Chapter12_apply.jpg"]

// Anchor
let overlayAnchor = ["https://ehammlette.github.io/Webdev24/chapter2/template.html","https://ehammlette.github.io/Webdev24/chapter3/analyze/analyze03.html","https://ehammlette.github.io/Webdev24/chapter4/analyze/analyze04.html","https://ehammlette.github.io/Webdev24/chapter5/extend/index.html","https://ehammlette.github.io/Webdev24/chapter06/extend/extend06.html","https://ehammlette.github.io/Webdev24/chapter07/analyze/analyze07.html","https://ehammlette.github.io/Webdev24/chapter09/apply/index.html"]
// Captions associated with each image
let imgCaptions = new Array(8);
imgCaptions[0]="Chapter 2 Template";
imgCaptions[1]="Chapter 3 "; 
imgCaptions[2]="Chapter 4"; 
imgCaptions[3]="Chapter 5"; 
imgCaptions[4]="Chapter 6";
imgCaptions[5]="Chapter 7";
imgCaptions[6]="Chapter 9";
imgCaptions[7]="Chapter 12";

// Count of images in the slideshow
let imgCount = imgFiles.length;
