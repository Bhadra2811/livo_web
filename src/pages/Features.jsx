import { useState } from "react";
import "./Features.css";
import featureImg from "../../public/images/4.png";

function Features() {
  const [active, setActive] = useState("sell");

  const tabs = [
    { id: "sell", label: "Sell Crops", icon: "🌾" },
    { id: "compare", label: "Compare Markets", icon: "📊" },
    { id: "weather", label: "Weather Forecast", icon: "🌦️" },
    { id: "price", label: "Price Trends", icon: "📈" },
  ];

  return (
    <div className="features-page">

      <h2 className="heading">Quick Actions</h2>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="icon">{tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>

      {/* Feature Card */}
      <div className="feature-card">

        {/* Left Image */}
        <div className="card-image">
          {/* <img
            src="https://images.unsplash.com/photo-1606788075761-9c10d66cde52"
            alt="feature"
          /> */}
          <img src={featureImg} alt="feature" />
        </div>

        {/* Right Content */}
        <div className="card-content">
          <h3>Say Hello to Smart Farming</h3>

          <p>
            The smart farming app helps farmers analyze crop data, monitor
            weather, and make better decisions using real-time insights.
          </p>

          <div className="features-list">
            <span>🌾 Crop Insights</span>
            <span>📊 Market Analysis</span>
            <span>📈 Price Trends</span>
          </div>

          <button className="explore-btn">Explore →</button>
        </div>

      </div>

    </div>
  );
}

export default Features;