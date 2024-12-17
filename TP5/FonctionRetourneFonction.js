// Step 1: Create a function that takes `a` and returns a function
function createMultiplier(a)
{
    // This returned function multiplies the number `nb` by the value `a`
    return function(nb)
    {
        return nb * a;
    };
}

// Step 2: Retrieve the arguments passed in the command line
let args = process.argv.slice(2);

// Ensure that the arguments are numeric and there are exactly 3 arguments
if (args.length !== 3 || args.some(arg => isNaN(arg)))
{
    console.log("Error: Please provide exactly three numeric values.");
} else
{
    // Convert the arguments to numbers
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);
    let c = parseFloat(args[2]);

    // Step 3: Create the multiplier function using `a`
    let multiplyByA = createMultiplier(a);

    // Step 4: Invoke the function with `b` and `c`, and display the results
    console.log(`Result of multiplying ${b} by ${a}: ${multiplyByA(b)}`);
    console.log(`Result of multiplying ${c} by ${a}: ${multiplyByA(c)}`);
}
