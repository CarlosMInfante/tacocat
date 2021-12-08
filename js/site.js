//Get our user input
function getValue(){

    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page.
    let userString = document.getElementById("userString").value;
    //check for a palindrome.
    let returnObj = checkForPalindrome(userString);
    //display message to the screen.
    displayMessage(returnObj);
}

//Check if the string is a palindrome.
function checkForPalindrome(userString){
    //Taco Cat and taC ocaT will not return True.

    //setting input to lowercase and assigning to variable.
    userString = userString.toLowerCase();

    //remove spaces and special characters
    //regex (Regular Expression) explanined:  
    //[^a-z0-9] match anything with letters a-z, lowercase, or 0-9 and keep it.  Anything else, remove.
    let regex = /[^a-z0-9]/gi;
    //Take whatever does not match regex remove it and replace with empty string.
    userString = userString.replace(regex, "");

    //This is an array
    let revString = [];
    //This is an object
    let returnObj = {};

        //length - 1 is to get the last index because an array starts at 0.
    for (let index = userString.length - 1; index >= 0; index--) {
        //add to revString with each loop.
       revString += userString[index];        
    }
        //passing in to determine which statement to use.
    if (revString == userString){
        returnObj.msg = "Well done!  You entered a palindrome!"
    }
    else{
        returnObj.msg = "Sorry, you did not enter a palindrome!"
    }
    
    //assging to revString to show returnObj in reverse
    returnObj.reversed = revString;

    return returnObj;

}
//display a message to the string.
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`
    document.getElementById("alert").classList.remove("invisible");

}