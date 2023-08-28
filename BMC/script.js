document.getElementById("calculate").addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById("result").textContent = "Please enter valid values for height and weight.";
    } else {
      const bmi = weight / ((height / 100) ** 2);
      const category = getBMICategory(bmi);
  
      document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(2)}. You are categorized as ${category}.`;
    }
  });
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  