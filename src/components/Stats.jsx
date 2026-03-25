import { useState } from "react";
import "./Stats.css";

function Stats() {
  const [usage, setUsage] = useState(50);

  // Simple calculation logic
  const monthlyCost = usage * 50;
  const savings = Math.round(monthlyCost * 0.4);

  return (
    <div className="stats">

      {/* TOP TEXT */}
      <h3 className="subtitle">
        We're not just another agri-tech company
      </h3>

      {/* STATS ROW */}
      <div className="stats-row">
        <div><h2>30M</h2><p>Acres impacted</p></div>
        <div><h2>92%</h2><p>Adoption rate</p></div>
        <div><h2>25%</h2><p>Increase in yield</p></div>
        <div><h2>80%</h2><p>Cost reduction</p></div>
        <div><h2>30%</h2><p>Rise in income</p></div>
      </div>

      {/* HEADING */}
      <h2 className="main-heading">More savings. More smiles.</h2>

      {/* CALCULATOR */}
      <div className="calculator">

        {/* LEFT */}
        <div className="left">
          <p>
            See how much you can save by optimizing your farm operations.
          </p>

          <label>Daily usage</label>
          <input
            type="range"
            min="10"
            max="100"
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          />

          <p>Usage: {usage}</p>
        </div>

        {/* RIGHT */}
        <div className="right">

          <div className="box">
            <p>Monthly cost</p>
            <h3>₹ {monthlyCost}</h3>
          </div>

          <div className="box">
            <p>Estimated savings</p>
            <h3 className="green">₹ {savings}</h3>
          </div>

          <button className="start-btn">Start saving today</button>

        </div>

      </div>

    </div>
  );
}

export default Stats;