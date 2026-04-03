// import { useEffect, useRef, useState } from "react";
// import "./simple.css";

// function SimpleSection() {
//   const sectionRef = useRef(null);
//   const [stage, setStage] = useState("center");

//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = sectionRef.current.getBoundingClientRect();

//       const sectionTop = rect.top;
//       const sectionHeight = rect.height;

//       // Only animate when section is visible
//       if (sectionTop < window.innerHeight && sectionTop > -sectionHeight) {
//         const progress = Math.abs(sectionTop) / sectionHeight;

//         if (progress < 0.3) {
//           setStage("center");
//         } else {
//           setStage("top");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className="simple-section">
//       <h1 className={`title ${stage}`}>
//         <span className="black">Build for </span>
//         <span className="green">Every Grower</span>
//       </h1>
//     </section>
//   );
// }

// export default SimpleSection;
import { useEffect, useRef, useState } from "react";
import "./simple.css";

function SimplePage() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();

      const scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
      const p = scrolled / rect.height;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const move = Math.min(progress * 0.8, 1);

  return (
    <section ref={sectionRef} className="simple-section">

      <h1
        className="title"
        style={{
          top: `${50 - move * 35}%`,
          transform: `translateY(-50%) scale(${1.3 - move * 0.6})`
        }}
      >
        <span className="black">Build for </span>
        <span className="green">Every Grower</span>
      </h1>

    </section>
  );
}

export default SimplePage;