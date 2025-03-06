const prompt = require('prompt-sync')();

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4); // Returns volume with 4 decimal places
  }
}

function calculateCylinderVolume() {
  let radius = parseFloat(prompt("Enter cylinder radius: "));
  let height = parseFloat(prompt("Enter cylinder height: "));

  if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
    console.log("Invalid input. Please enter positive numbers only.");
    return;
  }

  let cylinder = new Cylinder(radius, height);
  console.log(`Volume of the Cylinder: ${cylinder.getVolume()}`);
}

calculateCylinderVolume();