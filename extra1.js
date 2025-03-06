const prompt = require("prompt-sync")();

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function getUserInput() {
  let input = prompt("Enter numbers separated by commas (e.g. 5,6,1,3,4,2): ");
  let numbers = input.split(",").map(Number); // Convert input into an array of numbers

  if (numbers.some(isNaN)) {
    console.log("Invalid input. Please enter numbers only.");
    return;
  }

  console.log("Sorted Array:", bubbleSort(numbers));
}

getUserInput();
