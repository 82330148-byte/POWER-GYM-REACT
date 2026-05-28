import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

  function calculateFitness() {
    const h = Number(height);
    const w = Number(weight);

    if (h <= 0 || w <= 0) {
      alert("Please enter valid height and weight");
      return;
    }

    const bmi = w / ((h / 100) * (h / 100));

    let status = "";
    let calories = w * 33;
    let protein = w * 1.6;
    const water = w * 0.035;
    let advice = "";

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 25) {
      status = "Normal weight";
    } else if (bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    if (goal === "lose") {
      calories -= 400;
      advice = "Eat fewer calories and do cardio.";
    } else if (goal === "gain") {
      calories += 400;
      protein = w * 2;
      advice = "Eat more calories and train with weights.";
    } else {
      advice = "Keep balanced food and regular training.";
    }

    setResult({
      bmi: bmi.toFixed(1),
      status,
      calories: calories.toFixed(0),
      protein: protein.toFixed(0),
      water: water.toFixed(1),
      advice,
    });
  }

  return (
    <main className="calculator-page">
      <div className="card">
        <h1>Gym Player Calculator</h1>

        <input
          type="number"
          placeholder="Height in cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Muscle</option>
        </select>

        <button onClick={calculateFitness}>Calculate</button>

        {result && (
          <div className="result">
            <h2>Your Result</h2>
            <p>BMI: {result.bmi}</p>
            <p>Status: {result.status}</p>
            <p>Calories: {result.calories} kcal/day</p>
            <p>Protein: {result.protein} g/day</p>
            <p>Water: {result.water} L/day</p>
            <p>Advice: {result.advice}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Calculator;