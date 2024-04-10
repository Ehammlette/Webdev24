/*
    Student Name: Nora Hammons
    File Name: script.js
    Date: 4/10/2024
*/

//Hamburger menu function
function menu(){
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2alf14";
    }
    else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}