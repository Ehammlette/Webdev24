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
    document.getElementById("correct_answer").innerHTML=Math.floor(Math.random() * 1000) + 1;
    document.getElementById("number1").value=9;
    document.getElementById("number2").value=10;
    document.getElementById("range_input").value=50;


    getEstimate();

    //add event handlers for each input control
    document.getElementById("number1").onchange = getEstimate;
    document.getElementById("number2").onchange = getEstimate;
    document.getElementById("range_input").onchange = getEstimate;

}

function getEstimate()
{
    totalCost=0;
    let number_input1=document.getElementById("number1").value;
    let number_input2=document.getElementById("number2").value;
    let slider_range=document.getElementById("range_input").value;

    //displays the range input
    document.getElementById("range_of_input").innerHTML=document.getElementById("range_input").value;

    //get estimation
    totalCost+= parseInt(number_input1)+ parseInt(slider_range)*parseInt(number_input2);

    //type total into span estimate
    document.getElementById("estimate").innerHTML = totalCost;
}

function checkAnswer()
{
return 0;
}
