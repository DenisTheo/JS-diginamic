// Function that takes a string and logs "Bonjour" + the string
function greetPerson(name)
{
    console.log(`Hello ${name}`);
}

// Retrieve the argument passed from the command line
const argument = process.argv[2];

// Check if an argument was provided, otherwise display an error
if (argument)
{
    greetPerson(argument);
} else
{
    console.log("Error: Please provide a name as an argument.");
}
