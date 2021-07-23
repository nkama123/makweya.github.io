//functions
//
let age =Number
let name = String
let gender = String

function display( age,name,gender) {
name = prompt("Please enter your age","");
age=prompt("Please enter your name","");
gender=prompt("Please enter your gender","");
let answer ="";

if (age >= 18) {
    answer = " you are above 18,"
}else {
    answer = " you are below 18"
}

console.log("hi"  + name + ""  + (gender.substring(0.1)), + "" + answer);
}

display(age + name);
alert("enter your personal details");

//array
//

let personaldetails =[
_name = prompt("enter name",""),
_surname=prompt("enter surname",""),
_gender=prompt("enter gender",""),
_age = prompt("enter age","")];

let heading=[ "name" ,"surname" ,"gender" ,"age"];

let deco = heading.join("/");

console.log(heading +deco );

console.log(personaldetails)



/*arrow function*/

let sum = (num1,num2,num3)  => num1 + num2 + num3;
console.log( sum(5,5,5));