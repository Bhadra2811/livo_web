import { useState, useEffect, useRef } from "react";
import "./calculator.css";

function Calculator() {
  const [landSize, setLandSize] = useState(1);
  const [cost, setCost] = useState(12000);
  const [yieldVal, setYieldVal] = useState(1200);
  const [price, setPrice] = useState(22);
  const [visible, setVisible] = useState(false);

  const wrapperRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScroll = window.scrollY;
        if (entry.isIntersecting && currentScroll > lastScrollY.current) {
          setVisible(true);
        }
        lastScrollY.current = currentScroll;
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Calculations
  const totalCost = cost * landSize;
  const totalYield = yieldVal * landSize;
  const revenue = totalYield * price;
  const improvedRev = Math.round(totalYield * 1.3) * price;
  const savings = Math.max(improvedRev - revenue, 0);

  // Dynamic Y-axis
  const maxValueRaw = Math.max(totalCost, revenue, improvedRev);
  const MAX_VALUE = Math.ceil(maxValueRaw / 10000) * 10000 || 10000;
  const MAX_BAR = 260;

  const costH = (totalCost / MAX_VALUE) * MAX_BAR;
  const yieldH = ((revenue - totalCost) / MAX_VALUE) * MAX_BAR;
  const yieldHW = ((improvedRev - totalCost) / MAX_VALUE) * MAX_BAR;

  const steps = 5;
  const yAxis = Array.from({ length: steps + 1 }, (_, i) =>
    Math.round((MAX_VALUE - (MAX_VALUE / steps) * i) / 1000) + "k"
  );

  return (
    <div className="calc-wrapper" ref={wrapperRef}>

      <h1 className={`calc-title ${visible ? "reveal" : ""}`}>
        More Savings. More Profit.
      </h1>

      <p className={`calc-subtitle ${visible ? "reveal" : ""}`}>
        Share Your Current Farm Numbers. Discover The Profit You're Missing Without Livo.
      </p>

      <div className={`calc-main ${visible ? "reveal" : ""}`}>

        {/* LEFT CARD */}
        <div className="calc-card left-card">

          <div className="input-group">
            <div className="land-header">
              <div>
                <h4>Land size</h4>
                <p>Enter your field size</p>
              </div>

              <div className="stepper">
                <button onClick={() => setLandSize(l => Math.max(1, l - 1))}>−</button>
                <span>{landSize} Ac</span>
                <button onClick={() => setLandSize(l => l + 1)}>+</button>
              </div>
            </div>
          </div>

          <hr />

          <div className="input-group">
            <div className="label-row">
              <div>
                <h4>Input cost</h4>
                <p>Seeds, fertilizer & labour</p>
              </div>
              <span>₹ {(cost / 1000).toFixed(0)}k</span>
            </div>

            <input type="range" min="2000" max="50000"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <div>
                <h4>Current yield</h4>
                <p>How much you harvest</p>
              </div>
              <span>{yieldVal} kg</span>
            </div>

            <input type="range" min="300" max="4000"
              value={yieldVal}
              onChange={(e) => setYieldVal(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <div>
                <h4>Selling price</h4>
                <p>Per kg price</p>
              </div>
              <span>₹ {price}</span>
            </div>

            <input type="range" min="5" max="80"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="calc-card right-card">

          <h3>Your profit with livo</h3>

          <div className="chart-area">

            <div className="y-axis">
              {yAxis.map((y, i) => <span key={i}>{y}</span>)}
            </div>

            <div className="bars">

              <div className="bar-col">
                <div className="bar-stack">
                  <div className="bar-yield" style={{ height: yieldH }} />
                  <div className="bar-cost" style={{ height: costH }} />
                </div>
                <p>without livo</p>
              </div>

              <div className="bar-col">
                <div className="bar-stack">
                  <div className="bar-yield-livo" style={{ height: yieldHW }} />
                  <div className="bar-cost" style={{ height: costH }} />
                </div>
                <p>with livo</p>
              </div>

            </div>

            <img src="/images/farmer-calc.png" className="farmer-img" />
          </div>

          <div className="savings-box">
            <span>Total Savings</span>
            <strong>₹ {savings.toLocaleString()}</strong>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calculator;