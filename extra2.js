const prompt = require('prompt-sync')();

function steps(n) {
    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        let stair = '';
        for (let j = 1; j <= i; j++) {
            stair += '#';
        }
        console.log(stair);
    }
}

// Prompt the user to enter a number
let levels = parseInt(prompt("Enter the number of steps: "));
steps(levels);
