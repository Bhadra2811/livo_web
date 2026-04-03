import { useEffect, useRef, useState } from "react";
import "./sample.css";

function Sample() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress from 0 → 1
      const p = Math.min(
        Math.max(1 - rect.top / windowHeight, 0),
        1
      );

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sample-section">

      <h1
        className="sample-title"
        style={{
          transform: `translateY(${progress * -120}px) scale(${1.1 - progress * 0.1})`,
          opacity: 1 - progress
        }}
      >
        Build for Every Grower
      </h1>


    </section>
  );
}

export default Sample;