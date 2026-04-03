import "./Gallery.css";
import { useEffect, useRef, useState } from "react";

function Gallery() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);

          setTimeout(() => {
            setShowTitle(true);
          }, 900);
        } else {
          // 🔁 Reset when leaving screen (so animation repeats)
          setActive(false);
          setShowTitle(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const images = [
    "1.png",
    "2.png",
    "4.png",
    "5.png",
    "6.png",
    "road.png",
    "qr.png",
    "Farmers.png",
    "farmer.png",
    "4.png",
    "6.png",
  ];

  return (
    <div className="gallery" ref={sectionRef}>
      <div className="stage">

        {/* TITLE */}
        <h2 className={`center-title ${showTitle ? "show" : ""}`}>
          Our Community
        </h2>

        {/* IMAGES */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`item item${i + 1} ${active ? "scatter" : ""}`}
          >
            <img src={`/images/${img}`} alt="" />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;