// Function that checks if all elements in the array are strictly numbers
function isNumericArray(array)
{
    return array.every(element =>
    {
        let trimmed = element.trim(); // Remove leading and trailing spaces
        return !isNaN(trimmed) && !isNaN(parseFloat(trimmed));
    });
}

// Retrieve arguments starting from the third position (process.argv[2] and beyond)
let args = process.argv.slice(2);

// Joins all arguments into a single string, then splits by commas and cleans each element
let inputArray = args.join(" ").split(",").map(item => item.trim());

// If the array is empty, display an error
if (inputArray.length === 0 || (inputArray.length === 1 && inputArray[0] === ""))
{
    console.log("Error: Please provide a list of values separated by commas.");
} else
{
    console.log(`Input Array: [${inputArray.join(", ")}]`);
    console.log(`Is the array strictly numeric?" ${isNumericArray(inputArray)}`);
}
