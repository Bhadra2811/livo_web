import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [cost, setCost] = useState(12000);
  const [yieldVal, setYieldVal] = useState(1200);
  const [price, setPrice] = useState(22);

  // 🔥 calculations
  const revenue = yieldVal * price;
  const improvedRevenue = Math.round(revenue * 1.3); // 30% improvement
  const savings = improvedRevenue - revenue;

  return (
    <div className="calc-wrapper">

      {/* TITLE */}
      <h1 className="title">More Savings. More Profit.</h1>
      <p className="subtitle">
        Track Your Present. Transform Your Future With Livo.
      </p>

      {/* MAIN LAYOUT */}
      <div className="calc-main">

        {/* ================= LEFT CARD ================= */}
        <div className="calc-card left">

          {/* INPUT COST */}
          <div className="input-group">
            <div className="label-row">
              <label>Input cost</label>
              <span>₹ {cost}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>

          {/* YIELD */}
          <div className="input-group">
            <div className="label-row">
              <label>Current yield</label>
              <span>{yieldVal} kg</span>
            </div>
            <input
              type="range"
              min="300"
              max="4000"
              value={yieldVal}
              onChange={(e) => setYieldVal(Number(e.target.value))}
            />
          </div>

          {/* PRICE */}
          <div className="input-group">
            <div className="label-row">
              <label>Selling price</label>
              <span>₹ {price}</span>
            </div>
            <input
              type="range"
              min="5"
              max="80"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="calc-card right">

          <h3 className="chart-title">Your profit with livo</h3>

          {/* CHART */}
          <div className="chart">

            {/* WITHOUT LIVO */}
            <div className="bar-box">
              <div className="bar-stack">
                <div
                  className="cost"
                  style={{ height: `${Math.max(revenue * 0.002, 20)}px` }}
                ></div>
                <div
                  className="yield"
                  style={{ height: `${Math.max(revenue * 0.006, 60)}px` }}
                ></div>
              </div>
              <p>without livo</p>
            </div>

            {/* WITH LIVO */}
            <div className="bar-box">
              <div className="bar-stack">
                <div
                  className="cost small"
                  style={{ height: `${Math.max(revenue * 0.0015, 15)}px` }}
                ></div>
                <div
                  className="yield big"
                  style={{ height: `${Math.max(improvedRevenue * 0.007, 80)}px` }}
                ></div>
              </div>
              <p>with livo</p>
            </div>

          </div>

          {/* SAVINGS */}
          <div className="savings">
            <span>Total Savings</span>
            <b>₹ {savings.toLocaleString()}</b>
          </div>

          <p className="note">
            “That’s enough to cover a full month of farm labor”
          </p>

        </div>

      </div>
    </div>
  );
}

export default Calculator;
