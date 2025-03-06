const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;

  // PAYE (Tax) Calculation
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = 2400 + (grossSalary - 24000) * 0.25;
  } else {
    payee = 2400 + (8333 * 0.25) + (grossSalary - 32333) * 0.3;
  }

  // NHIF Deductions
  let nhif = 0;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 29999) {
    nhif = 750;
  } else {
    nhif = 1700;
  }

  // NSSF Deductions
  let nssf = 0.06 * grossSalary;
  if (nssf > 1800) {
    nssf = 1800; // NSSF capped at 1800
  }

  let netSalary = grossSalary - (payee + nhif + nssf);

  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE: ${payee}`);
  console.log(`NHIF: ${nhif}`);
  console.log(`NSSF: ${nssf}`);
  console.log(`Net Salary: ${netSalary}`);
}

rl.question("Enter Basic Salary: ", (basicSalary) => {
  rl.question("Enter Benefits: ", (benefits) => {
    calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
    rl.close();
  });
});
