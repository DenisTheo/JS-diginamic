// Function to capitalize the first letter of a string
function capitalizeFirstLetter(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeSentence(sentence)
{
    return sentence
        .split(" ")
        .map(word => capitalizeFirstLetter(word.trim()))
        .join(" ");
}

// Retrieve the sentence argument
const inputSentence = process.argv.slice(2).join(" ");

if (!inputSentence)
{
    console.log("Error: Please provide a sentence as an argument.");
} else
{
    const result = capitalizeSentence(inputSentence);
    console.log(`Input Sentence: ${inputSentence}`);
    console.log(`Capitalized Sentence: ${result}`);
}
