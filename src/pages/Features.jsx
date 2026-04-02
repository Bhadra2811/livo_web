// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { FaHandPointer, FaCamera, FaPaperPlane } from "react-icons/fa";
// import "./Features.css";

// function Features() {
//   const [active, setActive] = useState(0);
//   const [stage, setStage] = useState("title");

//   const intervalRef = useRef(null);

//   //  SCROLL TRIGGER
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-120px" });

//   const tabs = [
//     { id: "recommend", label: "Crop Recommendation" },
//     { id: "diagnosis", label: "AI Crop Diagnosis" },
//     { id: "activities", label: "Note Your Activities" },
//     { id: "chat", label: "Talk With Livo" },
//   ];

//   const content = [
//     {
//       title: "Choose the Best Crop",
//       desc: "Get recommendations based on soil and weather conditions.",
//       steps: [
//         { text: "Select land", icon: <FaHandPointer /> },
//         { text: "Analyze soil", icon: <FaCamera /> },
//         { text: "Get crop", icon: <FaPaperPlane /> },
//       ],
//       img: "/images/1.png",
//     },
//     {
//       title: "Track Your Journey",
//       desc: "Detect pests early with AI-powered insights.",
//       steps: [
//         { text: "Click the card", icon: <FaHandPointer /> },
//         { text: "Capture your field", icon: <FaCamera /> },
//         { text: "Send & get Solution", icon: <FaPaperPlane /> },
//       ],
//       img: "/images/2.png",
//     },
//     {
//       title: "Manage Farm Activities",
//       desc: "Track all your daily farming activities easily.",
//       steps: [
//         { text: "Add task", icon: <FaHandPointer /> },
//         { text: "Track progress", icon: <FaCamera /> },
//         { text: "Improve yield", icon: <FaPaperPlane /> },
//       ],
//       img: "/images/3.png",
//     },
//     {
//       title: "Talk With Livo",
//       desc: "Get instant help from AI assistant.",
//       steps: [
//         { text: "Ask question", icon: <FaHandPointer /> },
//         { text: "Get response", icon: <FaCamera /> },
//         { text: "Apply solution", icon: <FaPaperPlane /> },
//       ],
//       img: "/images/2.png",
//     },
//   ];

//   //  STAGE TIMELINE
//   useEffect(() => {
//     if (!isInView) return;

//     const t1 = setTimeout(() => setStage("tabs"), 1400);
//     const t2 = setTimeout(() => setStage("card"), 2600);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, [isInView]);

//   //  AUTO SLIDE
//   useEffect(() => {
//     if (!isInView || stage !== "card") return;

//     intervalRef.current = setInterval(() => {
//       setActive((prev) => (prev + 1) % content.length);
//     }, 4000);

//     return () => clearInterval(intervalRef.current);
//   }, [isInView, stage]);

//   const handleClick = (index) => {
//     setActive(index);
//     clearInterval(intervalRef.current);
//   };

//   return (
//     <div className="features" ref={ref}>

//       {/*  HEADING */}
//       <motion.h2
//         className="title"
//         initial={{ opacity: 0, y: 100 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1.6 }}
//       >
//         It’s Easy with Livo
//       </motion.h2>

//       {/*  TABS */}
//       {isInView && stage !== "title" && (
//         <motion.div
//           className="tabs"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           {tabs.map((tab, i) => (
//             <button
//               key={tab.id}
//               className={`tab ${active === i ? "active" : ""}`}
//               onClick={() => handleClick(i)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </motion.div>
//       )}

//       {/*  CAROUSEL */}
//       {isInView && stage === "card" && (
//         <div className="carousel">

//           <motion.div
//             className="track"
//             animate={{
//               x: `-${active * 100}%`,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//           >

//             {content.map((item, index) => (
//               <div className="feature-card" key={index}>

//                 {/* IMAGE */}
//                 <div className="left">
//                   <img src={item.img} alt="feature" />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="right">
//                   <h3>
//                     {item.title.split(" ")[0]}{" "}
//                     <span>{item.title.split(" ").slice(1).join(" ")}</span>
//                   </h3>

//                   <p>{item.desc}</p>

//                   <div className="steps">
//                     {item.steps.map((step, i) => (
//                       <div key={i} className="step">
//                         <div className="circle">{step.icon}</div>
//                         <span>{step.text}</span>
//                         {i !== item.steps.length - 1 && (
//                           <span className="arrow">→</span>
//                         )}
//                       </div>
//                     ))}
//                   </div>

//                   <button className="try-btn">Try Now →</button>
//                 </div>

//               </div>
//             ))}

//           </motion.div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Features;

import { useState, useEffect, useRef } from "react";
import "./Features.css";

const features = [
  {
    id: "crop-recommendation",
    label: "Crop Recommendation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 4.5-3 8.5-9 11C6 19.5 3 15.5 3 11a9 9 0 0 1 9-9z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    cardTitle: "Smart Crop Recommendations",
    cardHighlight: "Tailored for You",
    cardDesc:
      "Get personalized crop suggestions based on your soil type, climate, and season. Maximize your yield with data-driven insights.",
    steps: [
      { icon: <SoilIcon />, label: "Enter soil details" },
      { icon: <WeatherIcon />, label: "Analyze climate" },
      { icon: <CropIcon />, label: "Get best crops" },
    ],
  },
  {
    id: "ai-crop-diagnosis",
    label: "AI Crop Diagnosis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    cardTitle: "Track Your",
    cardHighlight: "Journey",
    cardDesc:
      "Detect pests early with AI-powered insights and protect your crops before damage spreads.",
    steps: [
      { icon: <TapIcon />, label: "Click the card on the home" },
      { icon: <CameraIcon />, label: "Capture your field" },
      { icon: <SendIcon />, label: "Send & get Solution" },
    ],
  },
  {
    id: "note-activities",
    label: "Note Your Activities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    cardTitle: "Log Your",
    cardHighlight: "Farm Activities",
    cardDesc:
      "Keep a structured record of every farm activity — watering, fertilizing, harvesting — all in one place for better planning.",
    steps: [
      { icon: <PlusIcon />, label: "Add new activity" },
      { icon: <CalendarIcon />, label: "Schedule & track" },
      { icon: <CheckIcon />, label: "Review progress" },
    ],
  },
  {
    id: "talk-with-livo",
    label: "Talk With Livo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
    cardTitle: "Chat With",
    cardHighlight: "Livo AI",
    cardDesc:
      "Ask Livo anything about your crops, weather, or farming techniques. Get instant expert answers powered by advanced AI.",
    steps: [
      { icon: <MicIcon />, label: "Type or speak" },
      { icon: <BrainIcon />, label: "AI processes query" },
      { icon: <ReplyIcon />, label: "Get instant answer" },
    ],
  },
];

// Step Icons
function TapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11V6a3 3 0 0 1 6 0v5" />
      <path d="M5 11h14l-1.5 9H6.5L5 11z" />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
function SoilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17h18M6 17V9a6 6 0 0 1 12 0v8" />
      <path d="M9 17v-4a3 3 0 0 1 6 0v4" />
    </svg>
  );
}
function WeatherIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}
function CropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12M12 12C12 7 7 3 2 3c0 5 4 9 10 9zM12 12c0-5 5-9 10-9-1 5-5 9-10 9" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3" /><path d="M19 10a7 7 0 0 1-14 0M12 19v3M9 22h6" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a2.5 2.5 0 0 1 5 0c2.5.5 4.5 2.5 4.5 5a5 5 0 0 1-1.5 3.5A5 5 0 0 1 19 15c0 2.8-2.2 5-5 5h-4a5 5 0 0 1-5-5 5 5 0 0 1 1.5-3.5A5 5 0 0 1 5 7c0-2.5 2-4.5 4.5-5z" />
    </svg>
  );
}
function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Features() {
  const [active, setActive] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState("right");
  const prevActive = useRef(1);
  const autoRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active || animating) return;
    setSlideDir(idx > active ? "right" : "left");
    setAnimating(true);
    prevActive.current = active;
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % features.length;
        setSlideDir("right");
        setAnimating(true);
        setTimeout(() => setAnimating(false), 380);
        return next;
      });
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  const feature = features[active];

  return (
    <section className="features-section">
      <h1 className="features-headline">
        Livo Makes it <span className="features-headline-accent">Effortless</span>
      </h1>

      {/* Tab Buttons */}
      <div className="features-tabs" role="tablist">
        {features.map((f, i) => (
          <button
            key={f.id}
            className={`features-tab${active === i ? " features-tab--active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={active === i}
          >
            <span className="features-tab-icon">{f.icon}</span>
            <span className="features-tab-label">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Feature Card */}
      <div className="features-card-wrapper">
        <div
          className={`features-card${animating ? ` features-card--exit-${slideDir}` : " features-card--enter"}`}
          key={active}
        >
          {/* Left: Image placeholder */}
          <div className="features-card-image">
            <div className="features-card-image-inner">
              <div className="features-card-image-overlay">
                <span className="features-card-image-badge">AI Powered</span>
              </div>
              <div className="features-card-image-dots" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="features-card-content">
            <h2 className="features-card-title">
              {feature.cardTitle}{" "}
              <span className="features-card-highlight">{feature.cardHighlight}</span>
            </h2>
            <p className="features-card-desc">{feature.cardDesc}</p>

            <div className="features-steps">
              {feature.steps.map((step, i) => (
                <div key={i} className="features-steps-item">
                  <div className="features-step-icon-wrap">
                    {step.icon}
                  </div>
                  {i < feature.steps.length - 1 && (
                    <span className="features-step-arrow">›› </span>
                  )}
                  <span className="features-step-label">{step.label}</span>
                  {i < feature.steps.length - 1 && (
                    <span className="features-step-arrow-sep" />
                  )}
                </div>
              ))}
            </div>

            <button className="features-try-btn">
              Try Now <span>›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}