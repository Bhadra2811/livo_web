// // import { useState } from "react";
// // import "./Stats.css";

// // function Stats() {
// //   const [usage, setUsage] = useState(50);

// //   // Simple calculation logic
// //   const monthlyCost = usage * 50;
// //   const savings = Math.round(monthlyCost * 0.4);

// //   return (
// //     <div className="stats">

// //       {/* TOP TEXT */}
// //       <h3 className="subtitle">
// //         We're not just another agri-tech company
// //       </h3>

// //       {/* STATS ROW */}
// //       <div className="stats-row">
// //         <div><h2>30M</h2><p>Acres impacted</p></div>
// //         <div><h2>92%</h2><p>Adoption rate</p></div>
// //         <div><h2>25%</h2><p>Increase in yield</p></div>
// //         <div><h2>80%</h2><p>Cost reduction</p></div>
// //         <div><h2>30%</h2><p>Rise in income</p></div>
// //       </div>

// //       {/* HEADING */}
// //       <h2 className="main-heading">More savings. More smiles.</h2>

// //       {/* CALCULATOR */}
// //       <div className="calculator">

// //         {/* LEFT */}
// //         <div className="left">
// //           <p>
// //             See how much you can save by optimizing your farm operations.
// //           </p>

// //           <label>Daily usage</label>
// //           <input
// //             type="range"
// //             min="10"
// //             max="100"
// //             value={usage}
// //             onChange={(e) => setUsage(e.target.value)}
// //           />

// //           <p>Usage: {usage}</p>
// //         </div>

// //         {/* RIGHT */}
// //         <div className="right">

// //           <div className="box">
// //             <p>Monthly cost</p>
// //             <h3>₹ {monthlyCost}</h3>
// //           </div>

// //           <div className="box">
// //             <p>Estimated savings</p>
// //             <h3 className="green">₹ {savings}</h3>
// //           </div>

// //           <button className="start-btn">Start saving today</button>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Stats;

// import "./Stats.css";

// function Stats() {
//   const stats = [
//     { value: "30M", label: "Acres Digitized & Farmers Empowered" },
//     { value: "92%", label: "Climate-Resilient Adoption" },
//     { value: "80%", label: "Higher Crop Yields" },
//     { value: "88%", label: "Reduced Pest & Disease Impact" },
//     { value: "75%", label: "Increased Farmer Income" },
//   ];

//   return (
//     <div className="stats-section">

//       {/* 🌄 BACKGROUND ROAD */}
//       <div className="bg-road" />

//       {/* 🌳 TREES */}
//       <img src="/images/tree1.png" alt="tree-left" className="tree left-tree" />
//       <img src="/images/tree2.png" alt="tree-right" className="tree right-tree" />

//       {/* CONTENT */}
//       <div className="stats-content">

//         <h2 className="main-heading">
//           We Are Not Another <span>Agri-Tech Company</span>
//         </h2>

//         <p className="sub-text">
//           From Farmers To Agronomists And Home Gardeners Etc...
//         </p>

//         {/* STATS */}
//         <div className="stats-row">
//           {stats.map((item, i) => (
//             <div key={i} className="stat-box">
//               <h1>{item.value}</h1>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* 👨‍🌾 FARMERS IMAGE */}
//       <div className="livo-img">
//         <img src="/images/Farmers.png" alt="farmers" />
//       </div>

//     </div>
//   );
// }

// export default Stats;
import { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Stats() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  const stats = [
    { value: "30M", label: "Acres Digitized & Farmers Empowered" },
    { value: "92%", label: "Climate-Resilient Adoption" },
    { value: "80%", label: "Higher Crop Yields" },
    { value: "88%", label: "Reduced Pest & Disease Impact" },
    { value: "75%", label: "Increased Farmer Income" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          setStep(1); // center heading

          setTimeout(() => setStep(2), 1500); // blur
          setTimeout(() => setStep(3), 3000); // move to top
          setTimeout(() => setStep(4), 4200); // show content
          setTimeout(() => setStep(5), 5200); // show bg + farmer

        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`stats-section ${step === 2 ? "blur" : ""}`} ref={sectionRef}>

      {/* 🔥 ONLY HEADING FIRST */}
      <h2 className={`main-heading step-${step}`}>
        We Are Not Another <span>Agri-Tech Company</span>
      </h2>

      {/* BACKGROUND */}
      <div className={`bg-road ${step >= 5 ? "show" : ""}`} />

      <img
        src="/images/tree1.png"
        alt="left-tree"
        className={`tree left-tree ${step >= 5 ? "show" : ""}`}
      />

      <img
        src="/images/tree2.png"
        alt="right-tree"
        className={`tree right-tree ${step >= 5 ? "show" : ""}`}
      />

      {/* CONTENT (comes ONLY after step 4) */}
      <div className={`stats-content ${step >= 4 ? "show" : ""}`}>

        <p className="sub-text">
          From Farmers To Agronomists And Home Gardeners Etc...
        </p>

        <div className="stats-row">
          {stats.map((item, i) => (
            <div key={i} className="stat-box">
              <h1>{item.value}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* FARMER */}
      <div className={`livo-img ${step >= 5 ? "show" : ""}`}>
        <img src="/images/Farmers.png" alt="farmers" />
      </div>

    </div>
  );
}

export default Stats;