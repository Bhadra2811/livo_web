import { useEffect, useState, useRef } from "react";
import "./WhyLivo.css";

import video1 from "../assets/videos/IMG_0803 (1) (1).mov";
import video2 from "../assets/videos/IMG_0805 (1) (1).mov";
import video3 from "../assets/videos/IMG_0803 (1) (1).mov";
import video4 from "../assets/videos/IMG_0805 (1) (1).mov";
import video5 from "../assets/videos/IMG_0803 (1) (1).mov";

const videoData = [
  {
    src: video1,
    role: "Farmer",
    description:
      "Make Smarter Crop Decisions With AI-Powered Insights, Climate Forecasts, And Early Pest Detection.",
  },
  {
    src: video2,
    role: "Agronomist",
    description:
      "Analyze Crop Health, Monitor Field Conditions, And Deliver Data-Driven Recommendations To Farmers.",
  },
  {
    src: video3,
    role: "Home Gardener",
    description:
      "Grow Healthier Plants At Home With Personalized Care Tips, Watering Schedules, And Disease Alerts.",
  },
  {
    src: video4,
    role: "Greenhouse Manager",
    description:
      "Automate Climate Control, Track Plant Growth Stages, And Maximize Yield In Controlled Environments.",
  },
  {
    src: video5,
    role: "Agricultural Researcher",
    description:
      "Collect Field Data, Run Experiments, And Generate Reports To Advance Sustainable Farming Practices.",
  },
];

function WhyLivo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isManualPlay, setIsManualPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  /* STAGGER: show carousel + controls after title animates in */
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 900);
    return () => clearTimeout(timer);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!playing || isManualPlay) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % videoData.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [playing, isManualPlay]);

  /* VIDEO PLAY/PAUSE based on active index */
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [active]);

  /* CLICK ON ANY CARD — make it active and play full video */
  const handleVideoClick = (index) => {
    clearInterval(intervalRef.current);
    setActive(index);
    setIsManualPlay(true);
    setPlaying(true);

    const vid = videoRefs.current[index];
    if (vid) {
      vid.currentTime = 0;
      vid.muted = isMuted;
      vid.play().catch(() => {});
    }
  };

  /* VIDEO ENDS — resume auto-slide to next */
  const handleVideoEnd = () => {
    setIsManualPlay(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % videoData.length);
      setPlaying(true);
    }, 300);
  };

  /* DOT CLICK — jump to that video and play it fully */
  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setActive(index);
    setIsManualPlay(true);
    setPlaying(true);

    const vid = videoRefs.current[index];
    if (vid) {
      vid.currentTime = 0;
      vid.muted = isMuted;
      vid.play().catch(() => {});
    }
  };

  /* PLAY / PAUSE BUTTON */
  const togglePlay = () => {
    const vid = videoRefs.current[active];
    if (playing) {
      vid?.pause();
    } else {
      vid?.play().catch(() => {});
    }
    setPlaying((prev) => !prev);
  };

  /* MUTE BUTTON */
  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = next;
    });
  };

  return (
    <div className="why-livo">

      {/* ── TITLE ── animates in first */}
      <h2 className="main-title">
        Build for <span>Every Grower</span>
      </h2>

      {/* ── SUBTITLE ── */}
      <p className="subtitle">
        From Farmers To Agronomists And Home Gardeners Etc...
      </p>

      {/* ── CAROUSEL ── fades in after title */}
      <div className={`carousel ${showContent ? "carousel-visible" : ""}`}>
        <div
          className="track"
          style={{
            transform: `translateX(calc(50% - 350px - ${active * 260}px))`,
          }}
        >
          {videoData.map((item, index) => {
            const isActive = index === active;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`card ${isActive ? "active" : "side"}`}
                onClick={() => handleVideoClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  muted={isMuted}
                  onEnded={handleVideoEnd}
                  playsInline
                />

                {/* HOVER PLAY ICON — side cards only */}
                {!isActive && isHovered && (
                  <div className="hover-play-icon">&#9654;</div>
                )}

                {/* INFO LABEL OVERLAY — active card only */}
                {isActive && (
                  <div className="card-label">
                    <h3 className="card-label-role">{item.role}</h3>
                    <p className="card-label-desc">{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CONTROLS ── fades in after carousel */}
      <div className={`controls ${showContent ? "controls-visible" : ""}`}>

        <div className="dots">
          {videoData.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            >
              {i === active && playing && (
                <div className="progress" key={`progress-${active}`} />
              )}
            </div>
          ))}
        </div>

        <div className="control-buttons">
          <button onClick={togglePlay} className="circle-btn">
            {playing ? "❚❚" : "▶"}
          </button>
          <button onClick={toggleMute} className="circle-btn">
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default WhyLivo;