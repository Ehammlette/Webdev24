/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   2/27/2024

    Filename: project.js
*/
let frequency = 0;
let random_number=0;
let correct_count=0;

window.addEventListener("load", setupGame);
document.getElementById("check_button").addEventListener("click", checkAnswer);
document.getElementById("list_correct_answers").addEventListener("click", getCorrectAnswersList);
document.getElementById("restart").addEventListener("click", restartGame)



function setupGame() {
    random_number=choose_num();
    document.getElementById("looking_for_frequency").innerHTML = random_number;
    document.getElementById("number1").value = 10;
    document.getElementById("range_input").value = 50;

    //Call to find frequency
    getCurrentFrequency();

    //add event handlers for each input control
    document.getElementById("number1").onchange = getCurrentFrequency;
    document.getElementById("range_input").onchange = getCurrentFrequency;
    
}

function getCurrentFrequency() {
    let channel = document.getElementById("number1").value;
    let slider_range = document.getElementById("range_input").value;

    //displays the range input
    document.getElementById("range_of_input").innerHTML = document.getElementById("range_input").value;

    //get get frequency + trouble if statement to fix bug + number bug fix
    if (slider_range == 100) {
        frequency = Number(channel)+1;
    }
    else {
        if (slider_range < 10) {
            frequency = Number(channel)  + Number((slider_range / 100).toPrecision(1));
        }
        else {
            frequency = Number(channel) + Number((slider_range / 100).toPrecision(2));
        }
    }


    //type total into span currentFrequency
    document.getElementById("currentFrequency").innerHTML = frequency;
}

//chooses a random number that is set to be a specific 4 digit integer
function choose_num() {
    let chosen_num = Math.floor(Math.random() * 12);
    let chosen_freq=Math.floor(Math.random() * 101).toPrecision(2);

    if (chosen_freq == 0 && chosen_num != 11) {
        chosen_num = chosen_num + .00;
    }
    else if (chosen_freq === 100 && chosen_num != 11) {
        chosen_num = chosen_num + 1;
    }
    else if (chosen_num === 11) {
        chosen_num = 11;
    }
    else if(chosen_freq < 10)
    {
        chosen_num = chosen_num +Number((chosen_freq / 100).toPrecision(1));  
    }
    else
    {
        chosen_num = chosen_num + Number((chosen_freq / 100).toPrecision(2));
    }
    
    return chosen_num;
}

function checkAnswer() 
{
    
    if(random_number===frequency)
    {
        setupGame();
        correct_count++;
        document.getElementById("isAnswerQuestion").innerHTML="Correct";
    }
    else
    {
        document.getElementById("isAnswerQuestion").innerHTML="Incorrect";
    }
}

function getCorrectAnswersList()
{
    document.getElementById("listOfAnswer").innerHTML=correct_count;
}

function restartGame()
{
    location.reload();
}