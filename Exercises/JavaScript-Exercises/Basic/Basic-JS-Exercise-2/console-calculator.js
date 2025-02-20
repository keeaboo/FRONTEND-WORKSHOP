alert("Welcome to console calculator that only accepts two inputs.")

let num1, num2;
let operator;


// do {
//     //prompt the user for operator
//     operator = prompt("Enter the operator to be used. + for addition, * for multiplication, - for subtraction, and / for division.");
//     console.log("The operator to be used is " + operator);
// } while (operator != '+' || operator != '*' || operator != '-' || operator != '/');


getInputs ();

 //prompt the user for valid inputs, and convert them
function getInputs ()
{
    do {
        let x = 0;
        num1 = parseFloat(prompt("Enter the first number: "));
        console.log("The first number is " + num1);
    // if (isNaN(num1)){
    //     x = 1;
    // }
    } while (isNaN(num1));
    do {
        num2 = parseFloat(prompt("Enter the second number: "));
        console.log("The second number is " + num2);
    } while (isNaN(num2));
}

//display result of calculation
alert("The result is: " + calculation(num1, num2));
console.log("The result is " + calculation(num1, num2));

//function for calculation
function calculation (num1, num2)
{
    let result;
    //control structure for operation
    if (operator == '+')
    {
        result = num1 + num2;
    } 
    else if (operator == '*')
    {
        result = num1 * num2;
    } 
    else if (operator == '-')
    {
        result = num1 - num2;
    } 
    else if (operator == '/')
    {
        result = num1 / num2;
    }
    return result;
}



