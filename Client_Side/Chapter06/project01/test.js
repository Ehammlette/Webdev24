let pwd="1kpd2lDr";
let pwd2="1kpd2lDr";

if(pwd.length < 8 || /^[A-Za-z0-9]*$/.test(pwd)===false)
{
    console.log("first if")
}
else if(pwd != pwd2 && /^[A-Za-z0-9]*$/.test(pwd) && pwd.length >= 8)
{
    console.log("second if")
}
else
{
    console.log("third if")
}