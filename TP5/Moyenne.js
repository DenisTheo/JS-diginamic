// Function to calculate the average of an array of numbers
function calculateAverage(array)
{
    if (array.length === 0)
        return 0; // Handles empty arrays

    if (!array.every(item => !isNaN(item.trim()) && item.trim() !== ""))
    {
        return "Error: The array contains non-numeric values.";
    }

    let numbers = array.map(item => parseFloat(item.trim()));
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Retrieve arguments starting from the third position
let args = process.argv.slice(2);
let inputArray = args.join(" ").split(",").map(item => item.trim());

let result = calculateAverage(inputArray);
console.log(`Input Array: [${inputArray.join(", ")}]`);
console.log(`Average: ${result}`);
