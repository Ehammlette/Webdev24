/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   2/27/2024

    Filename: project.js
*/
let frequency = 0;
const element = document.getElementById("check_button");

window.addEventListener("load", setupForm);
element.addEventListener("click", checkAnswer);

function setupForm() {
    document.getElementById("looking_for_frequency").innerHTML = choose_num();
    document.getElementById("number1").value = 10;
    document.getElementById("range_input").value = 50;

    //Call to find frequency
    getCurrentFrequency();

    //add event handlers for each input control
    document.getElementById("number1").onchange = getCurrentFrequency;
    document.getElementById("range_input").onchange = getCurrentFrequency;

}

function getCurrentFrequency() {
    let frequency = 0;
    let channel = document.getElementById("number1").value;
    let slider_range = document.getElementById("range_input").value;

    //displays the range input
    document.getElementById("range_of_input").innerHTML = document.getElementById("range_input").value;

    //get get frequency + trouble if statement to fix bug + number bug fix
    if (slider_range === 100) {
        frequency = channel + 1;
    }
    else {
        if (slider_range < 10) {
            frequency = channel + "." + (slider_range / 100).toPrecision(1);
        }
        else {
            frequency = channel + "." + (slider_range / 100).toPrecision(2);
        }
    }


    //type total into span currentFrequency
    document.getElementById("currentFrequency").innerHTML = frequency;
}

function checkAnswer() {
    document.getElementById("test").innerHTML = "Hello World";
    return 0;
}

//chooses a random number that is set to be a specific 4 digit integer
function choose_num() {
    let chosen_num = Math.floor(Math.random() * 12);
    //let chosen_freq=(Math.floor(Math.random() * 101));
    let chosen_freq = 5;

    if (chosen_freq == 0 && chosen_num != 11) {
        chosen_num = chosen_num + .00;
    }
    else if (chosen_freq === 100 && chosen_num != 11) {
        chosen_num = chosen_num + 1;
    }
    else if (chosen_num === 11) {
        chosen_num = 11;
    }
    else {
        if (chosen_freq < 10)
        {
            chosen_num = chosen_num + (chosen_freq / 100).toPrecision(1);  
        }
        else 
        {
            chosen_num = chosen_num + (chosen_freq / 100).toPrecision(2);
        }
    }
    /*
    let chosen_num=0;
    let chosen_channel= Math.floor(Math.random() * 10);
    let chosen_freq= Math.floor(Math.random() * 100);

    if (chosen_freq<100)
    {
        chosen
    }
    else if (chosen_freq===100)
    {
        chosen_num = chosen_channel +
    }
    */
    return chosen_num;
}