let user = "Ryan"; // global scope - global variable
const PERCENTAGE = 0.05;
function showUser() 
{
    let user ="Reynolds"; //local scope - local variable
    console.log("In showUser - local scope");
    console.log(user);

    {
        var name ="Prestona";
    }
    console.log("In show user, name is " + name);
}

console.log("Global scope")
console.log(user); // print global variable
showUser();

console.log("Welcome to \"JavaScript Programming\"" + "\n" + "\tYou will enjoy this! ");

