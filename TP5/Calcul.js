// Function that calculates a * b + a + b
function calculate(a, b)
{
    return a * b + a + b;
}

// Retrieve arguments from the command line
let arga = process.argv[2];
let argb = process.argv[3];

// Convert arguments to numbers and validate input
let a = Number(arga);
let b = Number(argb);

if (!isNaN(a) && !isNaN(b))
{
    let result = calculate(a, b);
    console.log(`Result of ${a} * ${b} + ${a} + ${b} = ${result}`);
} else
{
    console.log("Error: Please provide two valid numbers as arguments.");
}
