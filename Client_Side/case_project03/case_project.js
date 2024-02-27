/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   2/20/2024

    Filename: project.js
*/
const MIN_NUMBER=1;
const MAX_NUMBER= 1000;
let frequency=0;
const element = document.getElementById("check_button");

window.addEventListener("load", setupForm);
element.addEventListener("click",checkAnswer);

function setupForm()
{
    document.getElementById("looking_for_frequency").innerHTML=;
    document.getElementById("number1").value=10;
    document.getElementById("range_input").value=50;


    getCurrentFrequency();

    //add event handlers for each input control
    document.getElementById("number1").onchange = getCurrentFrequency;
    document.getElementById("range_input").onchange = getCurrentFrequency;

}

function getCurrentFrequency()
{
    frequency=0;
    let channel=document.getElementById("number1").value;
    let slider_range=document.getElementById("range_input").value;

    //displays the range input
    document.getElementById("range_of_input").innerHTML=document.getElementById("range_input").value;

    //get get frequency
    totalCost= channel + "." +slider_range;
    

    //type total into span currentFrequency
    document.getElementById("currentFrequency").innerHTML = totalCost;
}

function checkAnswer()
{
    document.getElementById("test").innerHTML = "Hello World";
return 0;
}

//chooses a random number that is set to be a specific 4 digit integer
function choose_num()
{
    Math.floor(Math.random() * 10)+ "." +(Math.floor(Math.random() * 100))/100
}