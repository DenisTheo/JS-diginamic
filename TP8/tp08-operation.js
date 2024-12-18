// Function to handle operations
function handleOperation()
{
    try
    {
        // Get input values
        const input1 = document.querySelector("#number1").value.trim();
        const input2 = document.querySelector("#number2").value.trim();
        const operator = document.querySelector("#operator").value;

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
            throw new Error("You must enter valid numbers.");

        // Perform the selected operation
        let result;
        let operationMessage;

        switch (operator)
        {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0)
                    throw new Error("Division by zero is not allowed.");

                result = num1 / num2;
                break;
            default:
                throw new Error("Invalid operator selected.");
        }
        operationMessage = `Result of the addition: ${result}`;

        // Display the result
        console.log(operationMessage);
        resultElement.textContent = operationMessage;
    } catch (error)
    {
        console.error(error.message);
        const resultElement = document.querySelector("#result");
        resultElement.textContent = error.message;
        resultElement.classList.add("error");
    }
}

// Attach event listener to the button
document.querySelector("#calculateButton").addEventListener("click", handleOperation);
