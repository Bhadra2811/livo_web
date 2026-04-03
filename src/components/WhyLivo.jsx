
// import { useEffect, useState, useRef } from "react";
// import "./WhyLivo.css";

// import video1 from "../assets/videos/IMG_0803 (1) (1).mov";
// import video2 from "../assets/videos/IMG_0805 (1) (1).mov";
// import video3 from "../assets/videos/IMG_0803 (1) (1).mov";
// import video4 from "../assets/videos/IMG_0805 (1) (1).mov";
// import video5 from "../assets/videos/IMG_0803 (1) (1).mov";

// const videos = [video1, video2, video3, video4, video5];

// function WhyLivo() {
//   const [active, setActive] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const [isManualPlay, setIsManualPlay] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const [progress, setProgress] = useState(0);

//   const intervalRef = useRef(null);
//   const videoRefs = useRef([]);
//   const sectionRef = useRef(null);

//   /* 🔥 SCROLL ANIMATION */
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();

//       const scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
//       const p = scrolled / rect.height;

//       setProgress(p);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* AUTO SLIDE */
//   useEffect(() => {
//     if (!playing || isManualPlay) return;

//     intervalRef.current = setInterval(() => {
//       setActive((prev) => (prev + 1) % videos.length);
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, [playing, isManualPlay]);

//   /* VIDEO CONTROL */
//   useEffect(() => {
//     videoRefs.current.forEach((vid, i) => {
//       if (!vid) return;

//       if (i === active) {
//         vid.currentTime = 0;
//         vid.play();
//       } else {
//         vid.pause();
//       }
//     });
//   }, [active]);

//   /* VIDEO CLICK */
//   const handleVideoClick = (index) => {
//     clearInterval(intervalRef.current);
//     setActive(index);
//     setIsManualPlay(true);
//     setPlaying(true);

//     const vid = videoRefs.current[index];
//     if (vid) {
//       vid.currentTime = 0;
//       vid.muted = isMuted;
//       vid.play();
//     }
//   };

//   /* VIDEO END */
//   const handleVideoEnd = () => {
//     if (!isManualPlay) return;

//     setIsManualPlay(false);

//     setTimeout(() => {
//       setActive((prev) => (prev + 1) % videos.length);
//     }, 300);
//   };

//   /* CONTROLS */
//   const togglePlay = () => setPlaying((prev) => !prev);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//     videoRefs.current.forEach((vid) => {
//       if (vid) vid.muted = !isMuted;
//     });
//   };

//   const handleDotClick = (index) => {
//     clearInterval(intervalRef.current);
//     setActive(index);
//     setPlaying(false);
//   };

//   /* 🔥 HEADING CONTROL (SLOW + CONTROLLED) */
//   const move = Math.min(progress * 0.8, 1);

//   return (
//     <div ref={sectionRef} className="why-livo">

//       {/* 🔥 TITLE */}
//       <h2
//         className="main-title"
//         style={{
//           position: "sticky",
//           top: `${50 - move * 35}%`,
//           transform: `translateY(-50%) scale(${1.3 - move * 0.5})`
//         }}
//       >
//         Build for <span>Every Grower</span>
//       </h2>

//       {/* 🔥 CONTENT */}
//       <div
//         className="content"
//         style={{
//           opacity: progress > 0.25 ? (progress - 0.25) * 1.5 : 0,
//           transform: `translateY(${60 - progress * 60}px)`
//         }}
//       >

//         <p className="subtitle">
//           From Farmers To Agronomists And Home Gardeners Etc...
//         </p>

//         {/* CAROUSEL */}
//         <div className="carousel">
//           <div
//             className="track"
//             style={{
//               transform: `translateX(calc(50% - 350px - ${active * 260}px))`
//             }}
//           >
//             {videos.map((video, index) => {
//               const isActive = index === active;

//               return (
//                 <div
//                   key={index}
//                   className={`card ${isActive ? "active" : "side"}`}
//                   onClick={() => handleVideoClick(index)}
//                 >
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={video}
//                     muted={isMuted}
//                     onEnded={handleVideoEnd}
//                     loop={!isManualPlay}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CONTROLS */}
//         <div className="controls">

//           <div className="dots">
//             {videos.map((_, i) => (
//               <div
//                 key={i}
//                 className={`dot ${i === active ? "active" : ""}`}
//                 onClick={() => handleDotClick(i)}
//               >
//                 {i === active && playing && <div className="progress" />}
//               </div>
//             ))}
//           </div>

//           <div className="control-buttons">
//             <button onClick={togglePlay} className="circle-btn">
//               {playing ? "❚❚" : "▶"}
//             </button>

//             <button onClick={toggleMute} className="circle-btn">
//               {isMuted ? "🔇" : "🔊"}
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default WhyLivo;
// completly perfectly working one 
import { useEffect, useState, useRef } from "react";
import "./WhyLivo.css";

import video1 from "../assets/videos/IMG_0803 (1) (1).mov";
import video2 from "../assets/videos/IMG_0805 (1) (1).mov";
import video3 from "../assets/videos/IMG_0803 (1) (1).mov";
import video4 from "../assets/videos/IMG_0805 (1) (1).mov";
import video5 from "../assets/videos/IMG_0803 (1) (1).mov";

const videos = [video1, video2, video3, video4, video5];

function WhyLivo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  // const [stage, setStage] = useState("center");
  const [isManualPlay, setIsManualPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  /* TITLE ANIMATION */
  // useEffect(() => {
  //   const t1 = setTimeout(() => setStage("top"), 1200);
  //   const t2 = setTimeout(() => setStage("showContent"), 2000);

  //   return () => {
  //     clearTimeout(t1);
  //     clearTimeout(t2);
  //   };
  // }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!playing || isManualPlay) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [playing, isManualPlay]);

  /* VIDEO CONTROL */
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;

      if (i === active) {
        vid.currentTime = 0;
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, [active]);

  /* CLICK VIDEO */
  const handleVideoClick = (index) => {
    clearInterval(intervalRef.current);

    setActive(index);
    setIsManualPlay(true);
    setPlaying(true);

    const vid = videoRefs.current[index];
    if (vid) {
      vid.currentTime = 0;
      vid.muted = isMuted;
      vid.play();
    }
  };

  /* VIDEO END */
  const handleVideoEnd = () => {
    if (!isManualPlay) return;

    setIsManualPlay(false);

    setTimeout(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 300);
  };

  /* PLAY/PAUSE */
  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  /* MUTE */
  const toggleMute = () => {
    setIsMuted((prev) => !prev);

    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = !isMuted;
    });
  };

  /* DOT CLICK */
  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setActive(index);
    setPlaying(false);
  };

  return (
    <div className="why-livo">
      <div className="container">

        {/* TITLE */}
        <h2 className="main-title">
          Build for <span>Every Grower</span>
        </h2>

        {/* CONTENT */}
        <div className="content">

          <p className="subtitle">
            From Farmers To Agronomists And Home Gardeners Etc...
          </p>

          {/* CAROUSEL */}
          <div className="carousel">
            <div
              className="track"
              style={{
                transform: `translateX(calc(50% - 350px - ${active * 260}px))`
              }}
            >
              {videos.map((video, index) => {
                const isActive = index === active;

                return (
                  <div
                    key={index}
                    className={`card ${isActive ? "active" : "side"}`}
                    onClick={() => handleVideoClick(index)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video}
                      muted={isMuted}
                      onEnded={handleVideoEnd}
                      loop={!isManualPlay}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="controls">

            <div className="dots">
              {videos.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === active ? "active" : ""}`}
                  onClick={() => handleDotClick(i)}
                >
                  {i === active && playing && <div className="progress" />}
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
      </div>
    </div>
  );
}

export default WhyLivo;