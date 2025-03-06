const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function speedDetector() {
  rl.question("Enter car speed (km/h): ", (speed) => {
    speed = parseInt(speed);

    if (speed < 70) {
      console.log("Ok");
    } else {
      let demeritPoints = Math.floor((speed - 70) / 5);
      console.log(`Points: ${demeritPoints}`);

      if (demeritPoints > 12) {
        console.log("License suspended");
      }
    }

    rl.close();
  });
}

speedDetector();
