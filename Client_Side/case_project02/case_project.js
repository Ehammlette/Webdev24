/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   1/23/2024

    Filename: project.js
*/


window.addEventListener("load", setupForm);

function setupForm()
{
    document.getElementById("start_number").value=10;
    document.getElementById("range_input").value=50;

    getEstimate();

    //add event handlers for each input control
    document.getElementById("start_number").onchange = getEstimate;
    document.getElementById("range_input").onchange = getEstimate

}

function getEstimate()
{
    let total=0;
    let number_input=document.getElementById("start_number").value;
    let slider_range=document.getElementById("range_input").value;

    totalCost+= number_input* slider_range;

    document.getElementById("estimate").innerHTML = "$" + totalCost;
}
