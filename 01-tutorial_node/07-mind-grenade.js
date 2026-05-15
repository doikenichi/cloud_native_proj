const num1 =  5;
const num2 = 10;

function addValues() {
    console.log(`The sum is: ${num1 + num2}`);
}

// functions are executed once the file is loaded in memory, so the function is executed on require.
addValues();