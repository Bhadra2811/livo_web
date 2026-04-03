
// // import { useState, useEffect, useRef } from "react";
// // import "./Features.css";
// // import {
// //   Sprout, CloudSun, Leaf,
// //   Hand, Camera, Send,
// //   Plus, Calendar, Check,
// //   Mic, Brain, MessageCircle
// // } from "lucide-react";

// // /* ================= FEATURES DATA ================= */
// // const features = [
// //   {
// //     id: "crop-recommendation",
// //     label: "Crop Recommendation",
// //     image: "/images/7.png",
// //     cardTitle: "Meet Your",
// //     cardHighlight: "Perfect Crop",
// //     cardDesc: "Get personalized crop suggestions based on your soil type, climate, and season.",
// //     steps: [
// //       { icon: <Sprout />, label: "Add Soil" },
// //       { icon: <CloudSun />, label: "Check Climate" },
// //       { icon: <Leaf />, label: "Best Crop" },
// //     ],
// //   },
// //   {
// //     id: "ai-crop-diagnosis",
// //     label: "AI Crop Diagnosis",
// //     image: "/images/3.png",
// //     cardTitle: "Stay Ahead Of",
// //     cardHighlight: "Weather",
// //     cardDesc: "Detect pests early with AI-powered insights.",
// //     steps: [
// //       { icon: <Hand />, label: "Open Feature" },
// //       { icon: <Camera />, label: "Capture Crop" },
// //       { icon: <Send />, label: "Get Solution" },
// //     ],
// //   },
// //   {
// //     id: "note-activities",
// //     label: "Note Your Activities",
// //     image: "/images/2.png",
// //     cardTitle: "Your Plants",
// //     cardHighlight: "Health Guide",
// //     cardDesc: "Track all your farming activities easily.",
// //     steps: [
// //       { icon: <Plus />, label: "Add Task" },
// //       { icon: <Calendar />, label: "Track Work" },
// //       { icon: <Check />, label: "Progress" },
// //     ],
// //   },
// //   {
// //     id: "talk-with-livo",
// //     label: "Always with You",
// //     image: "/images/4.png",
// //     cardTitle: "Always",
// //     cardHighlight: "With You",
// //     cardDesc: "Ask Livo anything and get instant answers.",
// //     steps: [
// //       { icon: <Mic />, label: "Ask" },
// //       { icon: <Brain />, label: "Analyze" },
// //       { icon: <MessageCircle />, label: "Respond" },
// //     ],
// //   },
// //   {
// //     id: "daily-activities",
// //     label: "Daily Activities",
// //     image: "/images/4.png",
// //     cardTitle: "Plan Every Step",
// //     cardHighlight: "Right",
// //     cardDesc: "Organize your daily farm tasks efficiently.",
// //     steps: [
// //       { icon: <Plus />, label: "Add Plan" },
// //       { icon: <Calendar />, label: "Schedule" },
// //       { icon: <Check />, label: "Complete" },
// //     ],
// //   },
// // ];

// // export default function Features() {
// //   const [active, setActive] = useState(0);
// //   const autoRef = useRef(null);
// //   const [animateMain, setAnimateMain] = useState(false);
// //   const [direction, setDirection] = useState("right");

// //   useEffect(() => {
// //   const timer = setTimeout(() => {
// //     setAnimateMain(true);
// //   }, 100);

// //   return () => clearTimeout(timer);
// // }, []);

// //   const feature = features[active];

// //   return (
// //     <section className="features-section">

// //       {/* <h1 className="features-headline">
// //         Livo Makes it <span>Effortless</span>
// //       </h1> */}
// //       <h1 className={`features-headline ${animateMain ? "animate" : ""}`}>
// //         Livo Makes it <span>Effortless</span>
// //       </h1>

// //       {/* 🔥 FIXED BUTTON TABS */}
// //       <div className="features-tabs">
// //         {features.map((f, i) => (
// //           <button
// //             key={f.id}
// //             className={`features-tab ${active === i ? "active" : ""}`}
// //             // onClick={() => setActive(i)}
// //             onClick={() => {
// //             setDirection(i > active ? "right" : "left");
// //             setActive(i);
// //           }}
// //           >
// //             {f.label}
// //           </button>
// //         ))}
// //       </div>

// //       {/* <div className="features-card"> */}
// //       <div
// //         key={active}
// //         className={`features-card features-card--enter ${
// //           direction === "right" ? "from-right" : "from-left"
// //         }`}
// //       >

// //         <div className="features-left">
// //           <img src={feature.image} alt="" />
// //         </div>

// //         <div className="features-right">

// //           <h2 className="feature-heading animate-up">
// //             {feature.cardTitle} <span className="highlight">{feature.cardHighlight}</span>
// //           </h2>

// //           <p className="feature-desc">{feature.cardDesc}</p>

// //           <div className="features-steps">
// //             {feature.steps.map((step, i) => (
// //               <div key={i} className="features-step-group">

// //                 <div className="features-step">
// //                   <div className="circle">{step.icon}</div>
// //                   <span className="features-step-label">{step.label}</span>
// //                 </div>

// //                 {i < feature.steps.length - 1 && (
// //                   <div className="features-step-arrow">»</div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           <button className="feature-btn">
// //             Try Now <span>→</span>
// //           </button>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { useState, useEffect, useRef } from "react";
// import "./Features.css";
// import {
//   Sprout, CloudSun, Leaf,
//   Hand, Camera, Send,
//   Plus, Calendar, Check,
//   Mic, Brain, MessageCircle
// } from "lucide-react";

// /* ================= FEATURES DATA ================= */
// const features = [
//   {
//     id: "crop-recommendation",
//     label: "Crop Recommendation",
//     image: "/images/7.png",
//     cardTitle: "Meet Your",
//     cardHighlight: "Perfect Crop",
//     cardDesc: "Get personalized crop suggestions based on your soil type, climate, and season.",
//     steps: [
//       { icon: <Sprout />, label: "Add Soil" },
//       { icon: <CloudSun />, label: "Check Climate" },
//       { icon: <Leaf />, label: "Best Crop" },
//     ],
//   },
//   {
//     id: "ai-crop-diagnosis",
//     label: "AI Crop Diagnosis",
//     image: "/images/3.png",
//     cardTitle: "Stay Ahead Of",
//     cardHighlight: "Weather",
//     cardDesc: "Detect pests early with AI-powered insights.",
//     steps: [
//       { icon: <Hand />, label: "Open Feature" },
//       { icon: <Camera />, label: "Capture Crop" },
//       { icon: <Send />, label: "Get Solution" },
//     ],
//   },
//   {
//     id: "note-activities",
//     label: "Note Your Activities",
//     image: "/images/2.png",
//     cardTitle: "Your Plants",
//     cardHighlight: "Health Guide",
//     cardDesc: "Track all your farming activities easily.",
//     steps: [
//       { icon: <Plus />, label: "Add Task" },
//       { icon: <Calendar />, label: "Track Work" },
//       { icon: <Check />, label: "Progress" },
//     ],
//   },
//   {
//     id: "talk-with-livo",
//     label: "Always with You",
//     image: "/images/4.png",
//     cardTitle: "Always",
//     cardHighlight: "With You",
//     cardDesc: "Ask Livo anything and get instant answers.",
//     steps: [
//       { icon: <Mic />, label: "Ask" },
//       { icon: <Brain />, label: "Analyze" },
//       { icon: <MessageCircle />, label: "Respond" },
//     ],
//   },
//   {
//     id: "daily-activities",
//     label: "Daily Activities",
//     image: "/images/4.png",
//     cardTitle: "Plan Every Step",
//     cardHighlight: "Right",
//     cardDesc: "Organize your daily farm tasks efficiently.",
//     steps: [
//       { icon: <Plus />, label: "Add Plan" },
//       { icon: <Calendar />, label: "Schedule" },
//       { icon: <Check />, label: "Complete" },
//     ],
//   },
// ];

// export default function Features() {
//   const [active, setActive] = useState(0);
//   const [direction, setDirection] = useState("right");  // ✅ FIXED (moved inside)
//   const [animateMain, setAnimateMain] = useState(false);
//   const autoRef = useRef(null);

//   const feature = features[active];

//   /* 🔥 MAIN HEADING ANIMATION */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimateMain(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);
// useEffect(() => {
//   autoRef.current = setInterval(() => {
//     setDirection("right");  // always slide left visually
//     setActive((prev) => (prev + 1) % features.length);
//   }, 4000); // change every 4 sec

//   return () => clearInterval(autoRef.current);
// }, []);
//   return (
//     <section className="features-section">
  

//       {/* 🔥 MAIN TITLE */}
//       <h1 className={`features-headline ${animateMain ? "animate" : ""}`}>
//         Livo Makes it <span>Effortless</span>
//       </h1>

//       {/* TABS */}
//       <div className="features-tabs">
//         {features.map((f, i) => (
//           <button
//             key={f.id}
//             className={`features-tab ${active === i ? "active" : ""}`}
//             onClick={() => {
//               setDirection(i > active ? "right" : "left");
//               setActive(i);
//             }}
//           >
//             {f.label}
//           </button>
//         ))}
//       </div>

//       {/* 🔥 CARD WITH SLIDE */}
//       <div
//         key={active}
//         className={`features-card ${
//           direction === "right" ? "slide-right" : "slide-left"
//         }`}
//       >

//         <div className="features-left">
//           <img src={feature.image} alt="" />
//         </div>

//         <div className="features-right">

//           <h2 className="feature-heading">
//             {feature.cardTitle}{" "}
//             <span className="highlight">{feature.cardHighlight}</span>
//           </h2>

//           <p className="feature-desc">{feature.cardDesc}</p>

//           <div className="features-steps">
//             {feature.steps.map((step, i) => (
//               <div key={i} className="features-step-group">

//                 <div className="features-step">
//                   <div className="circle">{step.icon}</div>
//                   <span className="features-step-label">{step.label}</span>
//                 </div>

//                 {i < feature.steps.length - 1 && (
//                   <div className="features-step-arrow">»</div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* <button className="feature-btn">
//             Try Now <span>→</span>
//           </button> */}
//           <a
//             href="https://play.google.com/store/apps/details?id=com.revin.livo"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="feature-btn"
//           >
//             Try Now
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import "./Features.css";
import {
  Sprout, CloudSun, Leaf,
  Hand, Camera, Send,
  Plus, Calendar, Check,
  Mic, Brain, MessageCircle
} from "lucide-react";

/* ================= FEATURES DATA ================= */
const features = [
  {
    id: "crop-recommendation",
    label: "Crop Recommendation",
    image: "/images/7.png",
    // cardTag: "Smart Farming",
    cardTitle: "Meet Your",
    cardHighlight: "Perfect Crop",
    cardDesc: "Get personalized crop suggestions based on your soil type, climate, and season — powered by real agricultural data.",
    steps: [
      { icon: <Sprout />, label: "Add Soil" },
      { icon: <CloudSun />, label: "Check Climate" },
      { icon: <Leaf />, label: "Best Crop" },
    ],
    btnLabel: "Try Now",
    btnLink: "https://play.google.com/store/apps/details?id=com.revin.livo",
  },
  {
    id: "ai-crop-diagnosis",
    label: "AI Crop Diagnosis",
    image: "/images/3.png",
    // cardTag: "AI Powered",
    cardTitle: "Diagnose Your",
    cardHighlight: "Crop Instantly",
    cardDesc: "Detect pests and diseases early with AI-powered photo diagnosis. Get actionable solutions in seconds.",
    steps: [
      { icon: <Hand />, label: "Open Feature" },
      { icon: <Camera />, label: "Capture Crop" },
      { icon: <Send />, label: "Get Solution" },
    ],
    btnLabel: "Diagnose Now",
    btnLink: "https://play.google.com/store/apps/details?id=com.revin.livo",
  },
  {
    id: "note-activities",
    label: "Note Your Activities",
    image: "/images/2.png",
    // cardTag: "Track & Plan",
    cardTitle: "Record Every",
    cardHighlight: "Farm Activity",
    cardDesc: "Track all your farming activities, expenses, and progress in one place — stay organized every single day.",
    steps: [
      { icon: <Plus />, label: "Add Task" },
      { icon: <Calendar />, label: "Track Work" },
      { icon: <Check />, label: "Progress" },
    ],
    btnLabel: "Start Tracking",
    btnLink: "https://play.google.com/store/apps/details?id=com.revin.livo",
  },
  {
    id: "talk-with-livo",
    label: "Always with You",
    image: "/images/4.png",
    // cardTag: "Your AI Friend",
    cardTitle: "Always",
    cardHighlight: "With You",
    cardDesc: "Ask Livo anything about farming and get instant, reliable answers — anytime, anywhere, in your language.",
    steps: [
      { icon: <Mic />, label: "Ask" },
      { icon: <Brain />, label: "Analyze" },
      { icon: <MessageCircle />, label: "Respond" },
    ],
    btnLabel: "Talk Now",
    btnLink: "https://play.google.com/store/apps/details?id=com.revin.livo",
  },
  {
    id: "daily-activities",
    label: "Daily Activities",
    image: "/images/4.png",
    // cardTag: "Day Planner",
    cardTitle: "Plan Every Step",
    cardHighlight: "Just Right",
    cardDesc: "Organize your daily farm tasks efficiently. Never miss a watering, spraying, or harvesting schedule again.",
    steps: [
      { icon: <Plus />, label: "Add Plan" },
      { icon: <Calendar />, label: "Schedule" },
      { icon: <Check />, label: "Complete" },
    ],
    btnLabel: "Plan Today",
    btnLink: "https://play.google.com/store/apps/details?id=com.revin.livo",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animateMain, setAnimateMain] = useState(false);
  const autoRef = useRef(null);

  const feature = features[active];

  /* heading animation */
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMain(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* auto-rotate every 4s */
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  const handleTabClick = (i) => {
    clearInterval(autoRef.current); // pause auto on manual click
    setDirection(i > active ? "right" : "left");
    setActive(i);
    // restart auto
    autoRef.current = setInterval(() => {
      setDirection("right");
      setActive((prev) => (prev + 1) % features.length);
    }, 4000);
  };

  return (
    <section className="features-section">

      {/* MAIN TITLE */}
      <h1 className={`features-headline ${animateMain ? "animate" : ""}`}>
        Livo Makes it{" "}
        <span className="features-headline-accent">Effortless</span>
      </h1>

      {/* TABS */}
      <div className="features-tabs">
        {features.map((f, i) => (
          <button
            key={f.id}
            className={`features-tab ${active === i ? "active" : ""}`}
            onClick={() => handleTabClick(i)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* CARD */}
      <div
        key={active}
        className={`features-card ${direction === "right" ? "slide-right" : "slide-left"}`}
      >

        {/* LEFT — IMAGE */}
        <div className="features-card-image">
          <img src={feature.image} alt={feature.cardTitle} className="features-card-img" />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="features-right">

          {/* TAG */}
          {/* <span className="features-card-tag">{feature.cardTag}</span> */}

          {/* HEADING inside card */}
          <h2 className="feature-heading">
            {feature.cardTitle}{" "}
            <span className="highlight">{feature.cardHighlight}</span>
          </h2>

          <p className="feature-desc">{feature.cardDesc}</p>

          {/* STEPS */}
          <div className="features-steps">
            {feature.steps.map((step, i) => (
              <div key={i} className="features-step-group">
                <div className="features-step">
                  <div className="circle">{step.icon}</div>
                  <span className="features-step-label">{step.label}</span>
                </div>
                {i < feature.steps.length - 1 && (
                  <div className="features-step-arrow">»</div>
                )}
              </div>
            ))}
          </div>

          {/* PER-CARD BUTTON */}
          <a
            href={feature.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className="feature-btn"
          >
            {feature.btnLabel} <span>→</span>
          </a>

        </div>
      </div>

    </section>
  );
}