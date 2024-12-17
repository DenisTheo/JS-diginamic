// Function to capitalize the first letter of a string
function capitalizeFirstLetter(input)
{
    return input.charAt(0).toUpperCase() + input.slice(1);
}

// Retrieve the string argument
const inputString = process.argv[2];

if (!inputString)
{
    console.log("Error: Please provide a string as an argument.");
} else
{
    const result = capitalizeFirstLetter(inputString.trim());
    console.log(`Input: ${inputString}`);
    console.log(`Capitalized: ${result}`);
}
