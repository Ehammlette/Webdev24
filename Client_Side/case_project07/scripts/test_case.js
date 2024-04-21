"use strict"
/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   3/28/2024

    Filename: project.js
*/

// generates host array to be paired with a destination
let satellites = new Array(20);
satellites[0] = "Zenithia";
satellites[1] = "Hypernova";
satellites[2] = "Cygnion";
satellites[3] = "Andromax";
satellites[4] = "Orionis";
satellites[5] = "Vegalum";
satellites[6] = "Novaria";
satellites[7] = "Dracoria";
satellites[8] = "Phoenixa";
satellites[9] = "Nebsol";
satellites[10] = "Lumisynth";
satellites[11] = "Galactron";
satellites[12] = "Quasara";
satellites[13] = "Chronium";
satellites[14] = "Spectra";
satellites[15] = "Titanor";
satellites[16] = "Zephyria";
satellites[17] = "Exolux";
satellites[18] = "Nebulaeum";
satellites[19] = "Aetherium";

// generates corresponding to host array to be paired with a destination
let code_satellites = new Array(20);
code_satellites[0] = "417";
code_satellites[1] = "839";
code_satellites[2] = "562";
code_satellites[3] = "104";
code_satellites[4] = "725";
code_satellites[5] = "326";
code_satellites[6] = "981";
code_satellites[7] = "243";
code_satellites[8] = "678";
code_satellites[9] = "540";
code_satellites[10] = "129";
code_satellites[11] = "573";
code_satellites[12] = "849";
code_satellites[13] = "306";
code_satellites[14] = "457";
code_satellites[15] = "628";
code_satellites[16] = "715";
code_satellites[17] = "934";
code_satellites[18] = "281";
code_satellites[19] = "569";

/*--------End Arrays--------*/
let host;
let destination;
let answerOfYours;
let correct_answer;
let points = 0;
let correct_count = 0;
let data = new Array();

window.addEventListener("load", setupGame);
document.getElementById("check_button").addEventListener("click", checkAnswer);
document.getElementById("list_correct_answers").addEventListener("click", getCorrectAnswersList);


function setupGame() {

    //sets values for the game
    choose_from_list();
    document.getElementById("code").value="000000";

}

function setYourAnswer() {
answerOfYours=document.getElementById(code).value;
}

//function to choose which places are the hosts and destinations
function choose_from_list() {
    host = choose_num();
    destination = choose_num();

    if (host == destination) {
        let isDestinationSameAsHost = true;
        while (isDestinationSameAsHost == true) {
            if (host == destination) {
                destination = choose_num();
            }
            else {
                isDestinationSameAsHost = false;
            }
        }
    }
    else {
        correct_answer = code_satellites[host] + code_satellites[destination];
        document.getElementById("host").innerHTML = satellites[host];
        document.getElementById("destination").innerHTML = satellites[destination];
        console.log(host + destination);
    }
}

//chooses a random number (this is the correct answer)
function choose_num() {
    let chosen_num = Math.floor(Math.random() * 21);

    return chosen_num;
}

//check answer to see if it is correct
function checkAnswer() {
    setYourAnswer();

    if (answerOfYours === correct_answer)//if answer is correct
    {
        data[correct_count] = correct_answer;
        setupGame();
        correct_count++;
        document.getElementById("isAnswerQuestion").innerHTML = "Correct";
    }
    else//if answer is incorrect
    {
        document.getElementById("isAnswerQuestion").innerHTML = "Incorrect";
    }
}

function setPoints() {

}

function getCorrectAnswersList() {
    let htmlCode = "";

    if (data.length > 0)//if there is something in the list
    {
        for (let i = 0; i < data.length; i++) {
            htmlCode += '<p>' + data[i] +
                '</p>';
        }
    }
    else//if there is nothing in the list
    {
        htmlCode += "You have nothing to list";
    }

    //put the displayed code into div element
    document.getElementById("listOfAnswer").innerHTML = htmlCode;

}
//clears the list of correct answers
function clear_answer_list() {
    document.getElementById("listOfAnswer").innerHTML = "";
}

//refreshes screen
function restartGame() {
    location.reload();
}

/*--------Username and Password Logic--------*/

//declaring submit button is referencing Element submitButton
let submitButton = document.getElementById("submitButton");
//declaring pwd is referencing Element pwd
let pwd = document.getElementById("pwd");
//declaring pwd2 is referencing Element pwd2
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function () {
    if (pwd.value.length < 8 || /^[A-Za-z0-9]*$/g.test(pwd.value) === false)//if password is less then 8 letters/numbers or doesn't have a letter and a number
    {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
    }
    else if (pwd.value != pwd2.value && /^[A-Za-z0-9]*$/.test(pwd.value) && pwd.value.length >= 8)// if passwords aren't matching
    {
        pwd2.setCustomValidity("Your passwords must match");
    }
    else {
        pwd.setCustomValidity("");
    }
});
