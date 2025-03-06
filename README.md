# Week 1 Toy Problems

This project contains solutions for the Week 1 Toy Problems using JavaScript.

## Prerequisites
- GitHub account
- Node.js installed
- Basic knowledge of JavaScript

## Challenges
### Challenge 1: Student Grade Generator
A function that prompts the user to input student marks between 0 and 100 and outputs the corresponding grade.

| Marks Range  | Grade |
|-------------|-------|
| 80 - 100    | A     |
| 60 - 79     | B     |
| 50 - 59     | C     |
| 40 - 49     | D     |
| Below 40    | E     |

**Example Usage:**
```javascript
console.log(studentGrade(85)); // A
```

### Challenge 2: Speed Detector
A program that takes the speed of a car as input and calculates demerit points based on the speed limit of 70 km/h.

- Speed < 70: `Ok`
- Every 5 km/h above 70: 1 demerit point
- More than 12 demerit points: `License suspended`

**Example Usage:**
```javascript
console.log(speedDetector(85)); // Points: 3
```

### Challenge 3: Net Salary Calculator
A program to calculate an individual's net salary based on basic salary, benefits, and statutory deductions.

**Example Usage:**
```javascript
const salary = new SalaryCalculator(30000, 5000);
console.log(`Net Salary: ${salary.calculateNetSalary()}`);
```

### Extra Practice Questions
#### Bubble Sort
Sort an array of numbers from lowest to highest.

**Example Usage:**
```javascript
console.log(bubbleSort([5, 6, 1, 3, 4, 2]));
```

#### Staircase Problem
Generate a staircase pattern with `#` characters.

**Example Usage:**
```javascript
staircase(3);
```

#### Cylinder Volume
Calculate the volume of a cylinder with four decimal places using object classes.

**Example Usage:**
```javascript
const cylinder = new Cylinder(7, 14);
console.log(`Cylinder Volume: ${cylinder.getVolume()}`);
```

## How to Run the Code
1. Clone the repository:
   ```bash
   git clone <repository_link>
   ```
2. Navigate to the project folder:
   ```bash
   cd Week1-Toy-Problems
   ```
3. Run the code with Node.js:
   ```bash
   node challenge1.js
   ```

## Author
EZRA SEREM

## License
This project is licensed under the MIT License.
# Week-1-Toy-problems
