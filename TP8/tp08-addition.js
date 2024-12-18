// Function to handle addition
function handleAddition()
{
    // Get input values
    const input1 = document.querySelector("#number1").value.trim();
    const input2 = document.querySelector("#number2").value.trim();

    // Get the result element
    const resultElement = document.querySelector("#result");

    // Clear any previous result or error
    resultElement.textContent = "";
    resultElement.classList.remove("error");

    // Parse inputs to numbers
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2))
    {
        console.error("Invalid input, please enter valid numbers.");
        resultElement.textContent = "You must enter valid numbers.";
        resultElement.classList.add("error");
        return;
    }

    // Calculate the result
    const sum = num1 + num2;

    // Display the result
    console.log(`The result of the addition is ${sum}`);
    resultElement.textContent = `The result of the addition is ${sum}`;
}

// Attach event listener to the button
document.querySelector("#calculateButton").addEventListener("click", handleAddition);
