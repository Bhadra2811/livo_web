import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHandPointer, FaCamera, FaPaperPlane } from "react-icons/fa";
import "./Features.css";

function Features() {
  const [active, setActive] = useState(0);
  const [stage, setStage] = useState("title");

  const intervalRef = useRef(null);

  //  SCROLL TRIGGER
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const tabs = [
    { id: "recommend", label: "Crop Recommendation" },
    { id: "diagnosis", label: "AI Crop Diagnosis" },
    { id: "activities", label: "Note Your Activities" },
    { id: "chat", label: "Talk With Livo" },
  ];

  const content = [
    {
      title: "Choose the Best Crop",
      desc: "Get recommendations based on soil and weather conditions.",
      steps: [
        { text: "Select land", icon: <FaHandPointer /> },
        { text: "Analyze soil", icon: <FaCamera /> },
        { text: "Get crop", icon: <FaPaperPlane /> },
      ],
      img: "/images/1.png",
    },
    {
      title: "Track Your Journey",
      desc: "Detect pests early with AI-powered insights.",
      steps: [
        { text: "Click the card", icon: <FaHandPointer /> },
        { text: "Capture your field", icon: <FaCamera /> },
        { text: "Send & get Solution", icon: <FaPaperPlane /> },
      ],
      img: "/images/2.png",
    },
    {
      title: "Manage Farm Activities",
      desc: "Track all your daily farming activities easily.",
      steps: [
        { text: "Add task", icon: <FaHandPointer /> },
        { text: "Track progress", icon: <FaCamera /> },
        { text: "Improve yield", icon: <FaPaperPlane /> },
      ],
      img: "/images/3.png",
    },
    {
      title: "Talk With Livo",
      desc: "Get instant help from AI assistant.",
      steps: [
        { text: "Ask question", icon: <FaHandPointer /> },
        { text: "Get response", icon: <FaCamera /> },
        { text: "Apply solution", icon: <FaPaperPlane /> },
      ],
      img: "/images/2.png",
    },
  ];

  //  STAGE TIMELINE
  useEffect(() => {
    if (!isInView) return;

    const t1 = setTimeout(() => setStage("tabs"), 1400);
    const t2 = setTimeout(() => setStage("card"), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView]);

  //  AUTO SLIDE
  useEffect(() => {
    if (!isInView || stage !== "card") return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % content.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isInView, stage]);

  const handleClick = (index) => {
    setActive(index);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="features" ref={ref}>

      {/*  HEADING */}
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.6 }}
      >
        It’s Easy with Livo
      </motion.h2>

      {/*  TABS */}
      {isInView && stage !== "title" && (
        <motion.div
          className="tabs"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              className={`tab ${active === i ? "active" : ""}`}
              onClick={() => handleClick(i)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      )}

      {/*  CAROUSEL */}
      {isInView && stage === "card" && (
        <div className="carousel">

          <motion.div
            className="track"
            animate={{
              x: `-${active * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >

            {content.map((item, index) => (
              <div className="feature-card" key={index}>

                {/* IMAGE */}
                <div className="left">
                  <img src={item.img} alt="feature" />
                </div>

                {/* CONTENT */}
                <div className="right">
                  <h3>
                    {item.title.split(" ")[0]}{" "}
                    <span>{item.title.split(" ").slice(1).join(" ")}</span>
                  </h3>

                  <p>{item.desc}</p>

                  <div className="steps">
                    {item.steps.map((step, i) => (
                      <div key={i} className="step">
                        <div className="circle">{step.icon}</div>
                        <span>{step.text}</span>
                        {i !== item.steps.length - 1 && (
                          <span className="arrow">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <button className="try-btn">Try Now →</button>
                </div>

              </div>
            ))}

          </motion.div>
        </div>
      )}

    </div>
  );
}

export default Features;