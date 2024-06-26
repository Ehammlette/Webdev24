"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Client side";

// Names of the image files shown in the slideshow
let imgFiles = [,"image/screenshot/chapter2-02.jpg","image/screenshot/chapter3-02.jpg","image/screenshot/chapter4-02.jpg","image/screenshot/chapter5-02.jpg","image/screenshot/chapter6-1.jpg","image/screenshot/chapter7-01.jpg","image/screenshot/chapter9-01.jpg","image/screenshot/chapter12-3.jpg"]

// Anchor
let overlayAnchor = ["https://ehammlette.github.io/Webdev24/Client_Side/Chapter02/project02/project02-02.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter03/project02/project03-02.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter04/project02/project04-02.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter05/project02/project05-02.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter06/project01/project06-01.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter07/project01/project07-01.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter09/project01/project09-01a.html","https://ehammlette.github.io/Webdev24/Client_Side/Chapter12/project03/project12-03.html"]
// Captions associated with each image
let imgCaptions = new Array(8);
imgCaptions[0]="Chapter 2-02";
imgCaptions[1]="Chapter 3-02"; 
imgCaptions[2]="Chapter 4-02"; 
imgCaptions[3]="Chapter 5-02"; 
imgCaptions[4]="Chapter 6-1";
imgCaptions[5]="Chapter 7-01";
imgCaptions[6]="Chapter 9-01";
imgCaptions[7]="Chapter 12-3";

// Count of images in the slideshow
let imgCount = imgFiles.length;
