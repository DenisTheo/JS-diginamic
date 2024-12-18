// Function to handle form validation
function validateForm()
{
    try
    {
        // Get form values
        const lastName = document.querySelector("#lastName").value.trim();
        const firstName = document.querySelector("#firstName").value.trim();
        const birthDate = document.querySelector("#birthDate").value.trim();

        // Get the message element
        const messageElement = document.querySelector("#message");

        // Clear any previous messages
        messageElement.textContent = "";
        messageElement.classList.remove("error");

        // Validate inputs
        if (!lastName)
            throw new Error("Last name is required.");
        if (!firstName)
            throw new Error("First name is required.");
        if (!birthDate)
            throw new Error("Date of birth is required.");

        // If all inputs are valid
        console.log("Form submitted successfully.");
        messageElement.textContent = "Form submitted successfully.";
        messageElement.classList.remove("error");
        messageElement.style.color = "green";
    } catch (error)
    {
        // Display error message
        console.error(error.message);
        const messageElement = document.querySelector("#message");
        messageElement.textContent = error.message;
        messageElement.classList.add("error");
    }
}

// Attach event listener to the button
document.querySelector("#submitButton").addEventListener("click", validateForm);
