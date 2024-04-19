/*  JavaScript 7th Edition
    case project

    Author: Nora Hammons
    Date:   4/11/2024

    Filename: manual.js
*/

/*--------Arrays--------*/

// generates host array to be paired with a destination
let satellites= new Array(20);
satellites[0]="Zenithia";
satellites[1]="Hypernova";
satellites[2]="Cygnion";
satellites[3]="Andromax";
satellites[4]="Orionis";
satellites[5]="Vegalum";
satellites[6]="Novaria";
satellites[7]="Dracoria";
satellites[8]="Phoenixa";
satellites[9]="Nebsol";
satellites[10]="Lumisynth";
satellites[11]="Galactron";
satellites[12]="Quasara";
satellites[13]="Chronium";
satellites[14]="Spectra";
satellites[15]="Titanor";
satellites[16]="Zephyria";
satellites[17]="Exolux";
satellites[18]="Nebulaeum";
satellites[19]="Aetherium";

// generates corresponding to host array to be paired with a destination
let code_satellites= new Array(20);
code_satellites[0]="417";
code_satellites[1]="839";
code_satellites[2]="562";
code_satellites[3]="104";
code_satellites[4]="725";
code_satellites[5]="326";
code_satellites[6]="981";
code_satellites[7]="243";
code_satellites[8]="678";
code_satellites[9]="540";
code_satellites[10]="129";
code_satellites[11]="573";
code_satellites[12]="849";
code_satellites[13]="306";
code_satellites[14]="457";
code_satellites[15]="628";
code_satellites[16]="715";
code_satellites[17]="934";
code_satellites[18]="281";
code_satellites[19]="569";

/*--------End Arrays--------*/


/*-------- --------*/
window.addEventListener("load",function(){
    let htmlCode="";



    for(let i=0; i<satellites.length;i++)
        {
                htmlCode+='<p>'+(i+1)+'. '+ satellites[i]+': '+ code_satellites[i]+
                '</p>';
        }

    //put the displayed code into div element
    document.getElementById("listOfThings").innerHTML=htmlCode;
});

/*--------Dropdown--------*/