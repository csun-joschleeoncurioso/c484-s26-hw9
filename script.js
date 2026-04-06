// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var currentDate = new Date();

// 2. Get the current month, day, and year
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getFullYear();

// 3. Adjust month if needed (JavaScript months are 0-based)
month += 1;

// 4. Add leading zeros to month/day if needed
if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateString = "Today is " + month + "/" + day + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").innerHTML = dateString;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var numString1 = "67";
var numString2 = "427";
var numDecimalString = "12.20";
var nonNumString = "Volleyball";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

convert1 = Number(numString1);
convert2 = Number(numString2);
convert3 = Number(numDecimalString);
convert4 = Number(nonNumString);

checkNaN1 = Number.isNaN(convert1);
checkNaN2 = Number.isNaN(convert2);
checkNaN3 = Number.isNaN(convert3);
checkNaN4 = Number.isNaN(convert4);

checkInt1 = Number.isInteger(convert1);
checkInt2 = Number.isInteger(convert2);
checkInt3 = Number.isInteger(convert3);
checkInt4 = Number.isInteger(convert4);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

result1 = "Original: " + numString1 + " -> Converted: " + convert1 + " -> isNaN: " + checkNaN1 + " -> isInteger: " + checkInt1;
result2 = "Original: " + numString2 + " -> Converted: " + convert2 + " -> isNaN: " + checkNaN2 + " -> isInteger: " + checkInt2;
result3 = "Original: " + numDecimalString + " -> Converted: " + convert3 + " -> isNaN: " + checkNaN3 + " -> isInteger: " + checkInt3;
result4 = "Original: " + nonNumString + " -> Converted: " + convert4 + " -> isNaN: " + checkNaN4 + " -> isInteger: " + checkInt4;

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
combinedResults = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = combinedResults;

//conditional msg for isInteger()
intCheckArray = [numString1, numString2, numDecimalString, nonNumString];

let intMsg = "";

for (let i = 0; i < intCheckArray.length; i++) {
    let convertedValue = Number(intCheckArray[i]);
    if (Number.isInteger(convertedValue)) {
        intMsg += "The value " + "\"" + intCheckArray[i] + "\"" + " is an integer."
    }
    else {
        intMsg += "The value " + "\"" + intCheckArray[i] + "\"" + " is not an integer."
    }
    intMsg += "<br>";
}

document.getElementById("intConditionOutput").innerHTML = intMsg;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed() -> rounds to a specific number of decimal places
//    - toLocaleString() -> formats a number using locale-specific conventions
//    - Number.parseInt() -> parses a string and returns an integer
//    - Number.parseFloat() -> parses a string and returns a floating-point number
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

var tuition = 4206.78;
var grantUSG = 2979.12;
var grantPell = 3500;

totalGrants = (grantUSG + grantPell).toFixed(2);
outOfPocketExpense = (tuition - totalGrants).toLocaleString('en-US');

combinedResults = "Tuition: " + tuition + "<br>" + "Total Grants: " + totalGrants + "<br>" + "Out of Pocket Expense: " + outOfPocketExpense;
document.getElementById("mathOutput").innerHTML = combinedResults;

let extraMessage = "";

if (totalGrants > tuition) {
    extraMessage = "You don't owe anything. You will receiving a refund."
}
else if (totalGrants == tuition) {
    extraMessage = "You don't owe anything."
}
else {
    extraMessage = "You owe money. Pay up"
}

document.getElementById("mathConditionOutput").innerHTML = extraMessage;






// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

