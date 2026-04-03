
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
//   const autoRef = useRef(null);
//   const [animateMain, setAnimateMain] = useState(false);
//   const [direction, setDirection] = useState("right");

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     setAnimateMain(true);
//   }, 100);

//   return () => clearTimeout(timer);
// }, []);

//   const feature = features[active];

//   return (
//     <section className="features-section">

//       {/* <h1 className="features-headline">
//         Livo Makes it <span>Effortless</span>
//       </h1> */}
//       <h1 className={`features-headline ${animateMain ? "animate" : ""}`}>
//         Livo Makes it <span>Effortless</span>
//       </h1>

//       {/* 🔥 FIXED BUTTON TABS */}
//       <div className="features-tabs">
//         {features.map((f, i) => (
//           <button
//             key={f.id}
//             className={`features-tab ${active === i ? "active" : ""}`}
//             // onClick={() => setActive(i)}
//             onClick={() => {
//             setDirection(i > active ? "right" : "left");
//             setActive(i);
//           }}
//           >
//             {f.label}
//           </button>
//         ))}
//       </div>

//       {/* <div className="features-card"> */}
//       <div
//         key={active}
//         className={`features-card features-card--enter ${
//           direction === "right" ? "from-right" : "from-left"
//         }`}
//       >

//         <div className="features-left">
//           <img src={feature.image} alt="" />
//         </div>

//         <div className="features-right">

//           <h2 className="feature-heading animate-up">
//             {feature.cardTitle} <span className="highlight">{feature.cardHighlight}</span>
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

//           <button className="feature-btn">
//             Try Now <span>→</span>
//           </button>

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
    cardTitle: "Meet Your",
    cardHighlight: "Perfect Crop",
    cardDesc: "Get personalized crop suggestions based on your soil type, climate, and season.",
    steps: [
      { icon: <Sprout />, label: "Add Soil" },
      { icon: <CloudSun />, label: "Check Climate" },
      { icon: <Leaf />, label: "Best Crop" },
    ],
  },
  {
    id: "ai-crop-diagnosis",
    label: "AI Crop Diagnosis",
    image: "/images/3.png",
    cardTitle: "Stay Ahead Of",
    cardHighlight: "Weather",
    cardDesc: "Detect pests early with AI-powered insights.",
    steps: [
      { icon: <Hand />, label: "Open Feature" },
      { icon: <Camera />, label: "Capture Crop" },
      { icon: <Send />, label: "Get Solution" },
    ],
  },
  {
    id: "note-activities",
    label: "Note Your Activities",
    image: "/images/2.png",
    cardTitle: "Your Plants",
    cardHighlight: "Health Guide",
    cardDesc: "Track all your farming activities easily.",
    steps: [
      { icon: <Plus />, label: "Add Task" },
      { icon: <Calendar />, label: "Track Work" },
      { icon: <Check />, label: "Progress" },
    ],
  },
  {
    id: "talk-with-livo",
    label: "Always with You",
    image: "/images/4.png",
    cardTitle: "Always",
    cardHighlight: "With You",
    cardDesc: "Ask Livo anything and get instant answers.",
    steps: [
      { icon: <Mic />, label: "Ask" },
      { icon: <Brain />, label: "Analyze" },
      { icon: <MessageCircle />, label: "Respond" },
    ],
  },
  {
    id: "daily-activities",
    label: "Daily Activities",
    image: "/images/4.png",
    cardTitle: "Plan Every Step",
    cardHighlight: "Right",
    cardDesc: "Organize your daily farm tasks efficiently.",
    steps: [
      { icon: <Plus />, label: "Add Plan" },
      { icon: <Calendar />, label: "Schedule" },
      { icon: <Check />, label: "Complete" },
    ],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");  // ✅ FIXED (moved inside)
  const [animateMain, setAnimateMain] = useState(false);
  const autoRef = useRef(null);

  const feature = features[active];

  /* 🔥 MAIN HEADING ANIMATION */
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateMain(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
useEffect(() => {
  autoRef.current = setInterval(() => {
    setDirection("right");  // always slide left visually
    setActive((prev) => (prev + 1) % features.length);
  }, 4000); // change every 4 sec

  return () => clearInterval(autoRef.current);
}, []);
  return (
    <section className="features-section">
  

      {/* 🔥 MAIN TITLE */}
      <h1 className={`features-headline ${animateMain ? "animate" : ""}`}>
        Livo Makes it <span>Effortless</span>
      </h1>

      {/* TABS */}
      <div className="features-tabs">
        {features.map((f, i) => (
          <button
            key={f.id}
            className={`features-tab ${active === i ? "active" : ""}`}
            onClick={() => {
              setDirection(i > active ? "right" : "left");
              setActive(i);
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 🔥 CARD WITH SLIDE */}
      <div
        key={active}
        className={`features-card ${
          direction === "right" ? "slide-right" : "slide-left"
        }`}
      >

        <div className="features-left">
          <img src={feature.image} alt="" />
        </div>

        <div className="features-right">

          <h2 className="feature-heading">
            {feature.cardTitle}{" "}
            <span className="highlight">{feature.cardHighlight}</span>
          </h2>

          <p className="feature-desc">{feature.cardDesc}</p>

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

          {/* <button className="feature-btn">
            Try Now <span>→</span>
          </button> */}
          <a
            href="https://play.google.com/store/apps/details?id=com.revin.livo"
            target="_blank"
            rel="noopener noreferrer"
            className="feature-btn"
          >
            Try Now
          </a>
        </div>
      </div>
    </section>
  );
}