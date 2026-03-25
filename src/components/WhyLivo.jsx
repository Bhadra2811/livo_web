
import { useEffect, useState, useRef } from "react";
import "./WhyLivo.css";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";

// const videoModules = import.meta.glob("../assets/videos/*.mp4", {
//   eager: true,
// });

// const videos = Object.entries(videoModules).map(([path, mod], index) => ({
//   src: mod.default,
//   title: `Farmer ${index + 1}`,
//   desc: `Story about ${path.split("/").pop().replace(".mp4", "")}`,
// }));

// const videoList = Object.values(videoModules);

const videos = [
  {
    src: video1,
    title: "Farmer Ravi",
    desc: "Ravi shares how digital tools helped him connect directly with buyers and increase profits.",
  },
  {
    src: video2,
    title: "Farmer Suresh",
    desc: "Suresh explains how comparing market prices helped him choose the best selling time.",
  },
  {
    src: video3,
    title: "Farmer Anita",
    desc: "Anita talks about reducing middlemen and getting fair value for her crops.",
  },
  {
    src: video4,
    title: "Farmer Raj",
    desc: "Raj shares his experience using smart farming techniques to boost yield.",
  },
  {
    src: video5,
    title: "Farmer Lakshmi",
    desc: "Lakshmi explains how she expanded her reach to new buyers across regions.",
  },
 
];

function WhyLivo() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [selected, setSelected] = useState(null);
  const intervalRef = useRef(null);

  const CARD_WIDTH = selected !== null ? 650 : 480; //  dynamic width
  const GAP = 60;
  const OFFSET = CARD_WIDTH + GAP;

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (auto) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % videos.length);
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [auto]);

  return (
    <div className="why-livo">

      <h2>Built For Every Grower</h2>

      <div className="carousel">
        <div
          className="track"
          style={{
            transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${active * OFFSET}px))`
          }}
        >

          {videos.map((video, index) => (
            <div
              key={index}
              className={`card
                ${index === active ? "active" : ""} 
                ${selected === index ? "expanded" : ""}
              `}

              onClick={() => {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }

                if (selected === index) {
                  setSelected(null);
                  setAuto(true);
                } else {
                  setSelected(index);
                  setActive(index); //  keep centered
                  setAuto(false);
                }
              }}

              onMouseEnter={() => {
                if (selected === null) {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setActive(index);
                  setAuto(false);
                }
              }}

              onMouseLeave={() => {
                if (selected === null) {
                  setAuto(true);
                }
              }}
            >
              <video
                src={video.src}
                muted
                loop
                autoPlay={index === active}
                controls={selected === index}
              />

              {/*  SHOW DESCRIPTION ONLY WHEN SELECTED */}
              {/* {selected === index && (
                <div className="video-desc">
                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>
                </div>
              )} */}
              {/*  ALWAYS SHOW DESCRIPTION */}
                <div className="video-desc">
                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>
                  <button className="read-more">Read More</button>
                </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default WhyLivo;

// export default WhyLivo;
// import { useEffect, useState } from "react";
// import "./WhyLivo.css";

// const videos = [
//   {
//     id: "1WhAmRAFFJ0AJ-AI9jV1XBrcD0kC9p-k5",
//     title: "Farmer 1",
//     desc: "Real farmer success story",
//   },
//   {
//     id: "1j77HuRF46jKyGqZQRK2iKHxqRVWWFF7g",
//     title: "Farmer 2",
//     desc: "Better market access journey",
//   },
//   {
//     id: "1wwGuouZ5lzZvANcXE3QzQjyUDDAXZVHj",
//     title: "Farmer 3",
//     desc: "Smart farming transformation",
//   },
//   {
//     id: "1gxtCuxsFMYsuAPbVnqrRc5ijIix363Mz",
//     title: "Farmer 4",
//     desc: "From local to digital market",
//   },
//   {
//     id: "1KS1l9YhdOJNYs9mTlz3I8GCn5YVdDEnb",
//     title: "Farmer 5",
//     desc: "Increasing profits with Livo",
//   },
//   {
//     id: "1xB7qdslQWKA-obR7Ja9WTyLAZJffAPh0",
//     title: "Farmer 6",
//     desc: "Connecting farmers nationwide",
//   }
// ];

// function WhyLivo() {
//   const [active, setActive] = useState(0);
//   const [auto, setAuto] = useState(true);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const CARD_WIDTH = 480;
//   const GAP = 60;
//   const OFFSET = CARD_WIDTH + GAP;

//   useEffect(() => {
//     if (!auto) return;

//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % videos.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [auto]);

//   return (
//     <div className="why-livo">

//       <h2>Built For Every Grower</h2>

//       <div className="carousel">
//         <div
//           className="track"
//           style={{
//             transform: `translateX(calc(50% - ${active * OFFSET}px))`
//           }}
//         >

//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className={`card ${index === active ? "active" : ""}`}
//               onClick={() => {
//                 setActive(index);
//                 setAuto(false);
//                 setSelectedVideo(video);
//               }}
//             >

//               {/*  CLICK FIX */}
//               <div className="click-overlay"></div>

//               <iframe
//                 src={`https://drive.google.com/file/d/${video.id}/preview`}
//                 width="100%"
//                 height="100%"
//                 allow="autoplay"
//                 allowFullScreen
//                 style={{
//                   borderRadius: "20px",
//                   border: "none",
//                   pointerEvents: "none"
//                 }}
//               />

//               {index === active && (
//                 <div className="video-desc">
//                   <h3>{video.title}</h3>
//                   <p>{video.desc}</p>
//                 </div>
//               )}

//             </div>
//           ))}

//         </div>
//       </div>

//       {/*  MODAL */}
//       {selectedVideo && (
//         <div className="video-modal" onClick={() => setSelectedVideo(null)}>
//           <div
//             className="video-container"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <iframe
//               src={`https://drive.google.com/file/d/${selectedVideo.id}/preview?autoplay=1`}
//               width="100%"
//               height="500px"
//               allow="autoplay"
//               allowFullScreen
//               style={{ borderRadius: "12px", border: "none" }}
//             />

//             <h3>{selectedVideo.title}</h3>
//             <p>{selectedVideo.desc}</p>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default WhyLivo;