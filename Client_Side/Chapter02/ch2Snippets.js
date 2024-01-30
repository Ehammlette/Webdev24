let user = "Ryan"; // global scope - global variable
function showUser() 
{
    let user ="Reynolds"; //local scope - local variable
    console.log("In showUser - local scope");
    console.log(user);
}

console.log("Global scope")
console.log(user); // print global variable

showUser();