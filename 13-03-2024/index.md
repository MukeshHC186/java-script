----------Q.1 mathematical operators------------

  
Operator	            Name	                                          Example	Description
+	                     Addition	                                          3 + 5 = 8	Adds two numbers together
-	                     Subtraction	                                          7 - 4 = 3	Subtracts one number from another
*	                     Multiplication	                                          2 * 6 = 12	Multiplies two numbers together
/	                     Division	                                          8 / 2 = 4	Divides one number by another
%	                     Modulus	                                          10 % 3 = 1	Gives the remainder of a division
++	                    Increment	                                        (let x=5) x++ (result: 6)	Increases the value of x by one
--	                    Decrement	                                        (let x=5) x-- (result: 4)
()                      Grouping                                             (3+5=8,7-4=3)


------------Q.2 comparison operators----------------

Operator	                       Description	                         Example	Explanation
=                          Assigin value a=4
==	                       Equal to	5 == 5	                             True, because 5 is equal to 5
!=	                       Not equal to	5 != 10	                         True, because 5 is not equal to 10
<	                       Less than	3 < 7	                         True, because 3 is less than 7
>	                       Greater than	10 > 4	                         True, because 10 is greater than 4
<=	                       Less than or equal to	5 <= 5	             True, because 5 is equal to 5
>=	                       Greater than or equal to	8 >= 8	             True, because 8 is equal to 8
===                        strictaly Equal to 8===8                      True, because 8 is strictaly equal to 8
!==                        strictaly Not Equal to 10!=="10"              True, because 10 is strictaly Not equal to 10


--------------Q.3-------------
1. write a program of add two numbers

// Define two numbers
let num1 = 5;
let num2 = 10;

// Add the numbers
let sum = num1 + num2;

// Display the result
console.log("The sum of", num1, "and", num2, "is:", sum);

2. write a program of subtract two numbers

// Function to subtract two numbers
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// Example usage
const number1 = 10;
const number2 = 5;
const result = subtractNumbers(number1, number2);
console.log("The result of subtracting", number2, "from", number1, "is:", result);

3. write a program of multiply two numbers

// Function to multiply two numbers
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Test the function with example values
const number1 = 5;
const number2 = 10;
const result = multiplyNumbers(number1, number2);
console.log(`The result of multiplying ${number1} and ${number2} is: ${result}`);

4. write a program of divide two numbers

// Function to divide two numbers
function divideNumbers(a, b) {
    // Check if the divisor is zero
    if (b === 0) {
        return "Cannot divide by zero!";
    }

    // Perform the division
    return a / b;
}

// Example usage
const num1 = 10;
const num2 = 2;
const result = divideNumbers(num1, num2);
console.log(`The result of dividing ${num1} by ${num2} is: ${result}`);

5. write a program of modulus two numbers

// Function to calculate modulus of two numbers
function calculateModulus(a, b) {
    return a % b;
}

// Example usage
const num1 = 10;
const num2 = 3;

const result = calculateModulus(num1, num2);
console.log(`The modulus of ${num1} and ${num2} is: ${result}`);




