/*  JavaScript 7th Edition
    case project

    Author: Nora Hammons
    Date:   4/11/2024

    Filename: manual.js
*/

/*--------Arrays--------*/

// generates host array to be paired with a destination
let hosts= new Array(10);
hosts[0]="Zenithia";
hosts[1]="Hypernova";
hosts[2]="Cygnion";
hosts[3]="Andromax";
hosts[4]="Orionis";
hosts[5]="Vegalum";
hosts[6]="Novaria";
hosts[7]="Dracoria";
hosts[8]="Phoenixa";
hosts[9]="Nebsol";

// generates destinations array to be paired with a host
let destinations = new Array(10);
destinations[0]="Lumisynth";
destinations[1]="Galactron";
destinations[2]="Quasara";
destinations[3]="Chronium";
destinations[4]="Spectra";
destinations[5]="Titanor";
destinations[6]="Zephyria";
destinations[7]="Exolux";
destinations[8]="Nebulaeum";
destinations[9]="Aetherium";

// generates corresponding to host array to be paired with a destination
let code_hosts= new Array(10);
code_hosts[0]="417";
code_hosts[1]="839";
code_hosts[2]="562";
code_hosts[3]="104";
code_hosts[4]="725";
code_hosts[5]="326";
code_hosts[6]="981";
code_hosts[7]="243";
code_hosts[8]="678";
code_hosts[9]="540";

// generates code corresponding to destinations array to be paired with a host
let code_destinations = new Array(10);
code_destinations[0]="129";
code_destinations[1]="573";
code_destinations[2]="849";
code_destinations[3]="306";
code_destinations[4]="457";
code_destinations[5]="628";
code_destinations[6]="715";
code_destinations[7]="934";
code_destinations[8]="281";
code_destinations[9]="569";

/*-------- End Arrays--------*/

window.addEventListener("load", function(){
    let htmlCode="";

    for(let i=0; i<data.length;i++)
        {
                htmlCode+='<p>'+i+ '.' + hosts[i]+
                '</p>';
        }

    //put the displayed code into div element
    document.getElementById("listOfThings").innerHTML=htmlCode;
});