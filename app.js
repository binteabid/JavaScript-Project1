
/* JS Project-1

Percentage calculator 
even number identifier 
User Authentication

use if else , mathematical expression 
show your answer on browser not just in console */

document.write("JS Project-1")

// Percentage calculator 

document.write("Percentage Calculator <br>" )

let subjMathNum= +prompt("Ener your Number");
let subjEnglishNum= +prompt("Ener your Number");
let subjUrduNum= +prompt("Ener your Number");
let subjScienceNum= +prompt("Ener your Number");
let subjSStNum= +prompt("Ener your Number");
let obtainedMarks= (subjMathNum + subjEnglishNum + subjUrduNum + subjScienceNum + subjSStNum);
console.log(obtainedMarks);
let totalMarks= 500;

let percentage= obtainedMarks / totalMarks *100;
console.log(percentage);

if (percentage>=50){
    console.log( " Congratulations! You have got" +"" + obtainedMarks + "marks and Your percentage is " + percentage );
    document.write("<br> <br>Congratulations! You have passed this Examination.")
}

else{
    console.log("Sorry! You have failed this Examination.");
    
}






// even number identifier 

document.write("<br> Even Number Identifier<br>  " )

let userInput = prompt("Ener your Number");



if (userInput % 2 === 0 ) {
    console.log("Congratulations!This is the correct number.");
    document.write("<br>Congratulations!This is the correct number.")
} else {
   
    console.log("Sorry! Try again.");
    document.write("<br>Sorry! Try again.")
}





// User Authentication

document.write("<br>User Authentication<br>")
let savedUserName ="Ali";
let userInputut1 = prompt("Ener your Name");

let savedUserId ="99";
let userInput2 = prompt("Ener your Id");

let savedUserEmail ="abc@gmail.com";
let userInput3 = prompt("Ener your Email");

if (  userInputut1 === "Ali" && userInput2 === "99" && userInput3 === "abc@gmail.com") {
    console.log("You are succesfully Login");
    document.write("<br>You are succesfully Login!")
} else {
   
    console.log("Invalid username or password.");
    document.write("<br>Invalid username or password.")
}




