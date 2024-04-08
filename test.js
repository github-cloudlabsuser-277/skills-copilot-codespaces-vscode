const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log('Error: Division by zero is not allowed.');
        process.exit(1);
    }
    return a / b;
}

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
            let result;

            switch(operation) {
                case 'add':
                    result = add(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case 'subtract':
                    result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case 'multiply':
                    result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case 'divide':
                    result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                default:
                    console.log('Error: Invalid operation. Please enter add, subtract, multiply, or divide.');
                    rl.close();
                    return;
            }

            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});