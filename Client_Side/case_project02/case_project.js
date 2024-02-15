/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   1/23/2024

    Filename: project.js
*/
const MIN_NUMBER=1;
const MAX_NUMBER= 1000;
let totalCost=0;

window.addEventListener("load", setupForm);

function setupForm()
{
    document.getElementById("display").innerHTML=generateAnswer;
    document.getElementById("start_number").value=10;
    document.getElementById("range_input").value=50;

    getEstimate();

    //add event handlers for each input control
    document.getElementById("start_number").onchange = getEstimate;
    document.getElementById("range_input").onchange = getEstimate;

}

function getEstimate()
{
    totalCost=0;
    let number_input=document.getElementById("start_number").value;
    let slider_range=document.getElementById("range_input").value;

    totalCost+= number_input* slider_range;

    document.getElementById("estimate").innerHTML = totalCost;
}

function generateAnswer()
{
    return Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER;
}

function checkAnswer()
{

}
