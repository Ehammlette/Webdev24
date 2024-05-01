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

// Captions associated with each image
let imgCaptions = new Array(8);
imgCaptions[0]="Sky Pond (Rocky Mountain National Park)";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";

// Count of images in the slideshow
let imgCount = imgFiles.length;
