
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
          setTimeout(() => {
              document.querySelector("#calculator")?.scrollIntoView({
                behavior: "smooth"
              });
            }, 6500);
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
      <div className={`curve-transition ${step >= 5 ? "show" : ""}`}></div>

    </div>
  );
}

export default Stats;