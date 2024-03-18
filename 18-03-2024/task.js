// -----Question.1-------
/*
let num1=10;
let num2=15;
if num1 is greater num2 than print("num1 is larger")

if num1 is smaller than num2 print("num1 is smaller")

if num1 is eqaul to num2 than print("num1 and num2 is eqaul")

if above condition not match than print("not valid)
*/

let num1=10;
let num2=15;
if(num1>num2){
    console.log("num1 is larger")
}else if(num1<num2){
    console.log("num1 is smaller")
}else if(num1==num2){
    console.log("num1 and num2 is equal")
}
else{
    console.log("not valid")
}

// -----Question.2-------
/*
Let LightColor = "green";

Write a program that simulates a traffic light. If the light is "green", print "Go".
 If it's "llow", print "Slow down".
  If it's "e", print "Stop"
*/
LightColor = "green";
if(LightColor=="green"){
    console.log("Go")
}else if(LightColor=="yellow"){
    console.log("slow down")
}else{
    console.log("Stop")
}

// -----Question.3-------
/*
Let age=25

Create a program that categorizes a person's age. 
If the age is less than 18, print "Minor". 
If it's between ik ond 65, print "Adult".
 Otherwise, print "Senior"
 */
 let age=25;
 if(age<18){
    console.log("Minor")
 }else if(age>=18 && age<=65){
    console.log("Adult")
 }
 else{
    console.log("Senior")
 }



