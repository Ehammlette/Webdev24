/*  JavaScript 7th Edition
    case project

    Author: Nora(Ethan) Hammons
    Date:   3/28/2024

    Filename: project.js
*/

window.addEventListener("load", yourInformation);

function yourInformation()
{
    let status_onLine;
    if(navigator.onLine===true)
    {
        status_onLine="Online";
    }
    else
    {
        status_onLine="Offline";
    }

    document.getElementById("height_screen").innerHTML= "<p>Screen Height: " + screen.height + " pixels </p>"; 
    document.getElementById("width_screen").innerHTML= "<p>Screen Width: " + screen.width + " pixels </p>"; 
    document.getElementById("Operating_system").innerHTML= "<p> Operating system: " + navigator.platform + "</p>"; 
    document.getElementById("appName").innerHTML= "<p> Browser: " + navigator.appName + "</p>"; 
    document.getElementById("onLine").innerHTML= "<p> Status of browser: " + status_onLine + "</p>"; 
    document.getElementById("available_usable_screen").innerHTML= "<p> Available window ratio: " + screen.availWidth+ " x " + screen.availHeight + "</p>"; 
}