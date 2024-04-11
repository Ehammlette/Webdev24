/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   3/28/2024

    Filename: project.js
*/

let frequency = 0;
let random_number=0;
let correct_count=0;
let data = new Array();

window.addEventListener("load", setupGame);
document.getElementById("check_button").addEventListener("click", checkAnswer);
document.getElementById("list_correct_answers").addEventListener("click", getCorrectAnswersList);
document.getElementById("restart").addEventListener("click", restartGame);
document.getElementById("clear").addEventListener("click", clear_answer_list);


function setupGame() {
    //set up defaults
    random_number=choose_num();
    document.getElementById("looking_for_frequency").innerHTML = random_number;
    document.getElementById("number1").value = 5;
    document.getElementById("range_input").value = 50;

    //Call to find frequency
    getCurrentFrequency();

    //add event handlers for each input control
    document.getElementById("number1").onchange = getCurrentFrequency;
    document.getElementById("range_input").onchange = getCurrentFrequency;
    
}

function getCurrentFrequency() {
    //set two variables equal to the two input elements
    let channel = document.getElementById("number1").value;
    let slider_range = document.getElementById("range_input").value;

    //displays the range input
    document.getElementById("range_of_input").innerHTML = document.getElementById("range_input").value;

    //get get frequency + trouble if statement to fix bug + number bug fix
    if (slider_range == 100) {//if decimal is equal to 100
        frequency = Number(channel)+1;
    }
    else {
        if (slider_range < 10) {//if decimal is less then ten
            frequency = Number(channel)  + Number((slider_range / 100).toPrecision(1));
        }
        else {//if decimal is greater then ten
            frequency = Number(channel) + Number((slider_range / 100).toPrecision(2));
        }
    }


    //type total into span currentFrequency
    document.getElementById("currentFrequency").innerHTML = frequency;
}

//chooses a random number that is set to be a specific 4 digit integer
function choose_num() {
    let chosen_num = Math.floor(Math.random() * 12);
    let chosen_freq=Math.floor(101* Math.random()).toPrecision(2);

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

//check answer to see if it is correct
function checkAnswer() 
{
    
    if(random_number===frequency)//if answer is correct
    {
        data[correct_count]=random_number;
        setupGame();
        correct_count++;
        document.getElementById("isAnswerQuestion").innerHTML="Correct";
    }
    else//if answer is incorrect
    {
        document.getElementById("isAnswerQuestion").innerHTML="Incorrect";
    }
}


function getCorrectAnswersList()
{
    let htmlCode="";

    if (data.length>0)//if there is something in the list
    {
        for(let i=0; i<data.length;i++)
        {
                htmlCode+='<p>'+data[i]+
                '</p>';
        }
    }
    else//if there is nothing in the list
    {
        htmlCode+="You have nothing to list";
    }

    //put the displayed code into div element
    document.getElementById("listOfAnswer").innerHTML=htmlCode;

}
//clears the list of correct answers
function clear_answer_list()
{
    document.getElementById("listOfAnswer").innerHTML="";
}

//refereshes screen
function restartGame()
{
    location.reload();
}

/*--------Username and Password Logic--------*/

 //declaring submit button is referencing Element submitButton
 let submitButton = document.getElementById("submitButton");
//declaring pwd is referencing Element pwd
 let pwd = document.getElementById("pwd");
 //declaring pwd2 is referencing Element pwd2
 let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
      if(pwd.value.length < 8 || /^[A-Za-z0-9]*$/g.test(pwd.value)===false)//if password is less then 8 letters/numbers or doesn't have a letter and a number
      {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
      }
      else if(pwd.value != pwd2.value && /^[A-Za-z0-9]*$/.test(pwd.value) && pwd.value.length >= 8)// if passwords aren't matching
      {
            pwd2.setCustomValidity("Your passwords must match");
      }
      else
      {
          pwd.setCustomValidity("");
      }
});
