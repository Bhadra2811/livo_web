// import "./Hero.css";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const words = ["FIELDS", "FARM", "AGRI", "CROP"];

// function Hero() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   //  animation stages
//   const [stage, setStage] = useState("intro"); 
//   // intro → hold → exit → showMain

//   //  word rotation (smooth)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);

//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % words.length);
//         setFade(true);
//       }, 300);
//     }, 2400);

//     return () => clearInterval(interval);
//   }, []);

//   //  timeline control
//   useEffect(() => {
//     const t1 = setTimeout(() => setStage("hold"), 1200);   // LIVO entered
//     const t2 = setTimeout(() => setStage("exit"), 2000);   // start exit
//     const t3 = setTimeout(() => setStage("showMain"), 2800); // show H1

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//     };
//   }, []);

//   return (
//     <div className="hero">

//       {/* NAVBAR */}
//       <nav className="navbar">
//         <div className="logo">LIVO</div>

//         <ul className="nav-links">
//           <li className="active">Home</li>
//           <li>Features</li>
//           <li>Pricing</li>
//           <li>Community</li>
//         </ul>

//         <button className="download-btn">Download App</button>
//       </nav>

//       {/* HERO */}
//       <div className="hero-image">

//         <div className="hero-center">

//           {/*  BIG LIVO */}
//           {stage !== "showMain" && (
//             <div className={`intro-livo ${stage}`}>
//               LIVO
//             </div>
//           )}

//           {/*  MAIN CONTENT */}
//           {stage === "showMain" && (
//             <div className="main-content show">

//               <h1>
//                 YOUR{" "}
//                 <span
//                   className="changing-word"
//                   style={{ opacity: fade ? 1 : 0 }}
//                 >
//                   {words[index]}
//                 </span>{" "}
//                 <span className="profit-word">COMPANION</span>
//               </h1>

//               <p>
//                 “Your Agri Companion From First Seed To Final Harvest”
//               </p>

//             </div>
//           )}

//         </div>

//         {/* FARMER */}
//         <img src="/images/farmer.png" alt="farmer" className="farmer-img" />

//       </div>

//       {/* SOIL */}
//       <div className="soil-section">

//         <div className="bottom-download">
//           <button className="store-btn">
//             <FaApple className="icon" />
//             <div className="text">
//               <small>Download on the</small>
//               <strong>App Store</strong>
//             </div>
//           </button>

//           <button className="store-btn">
//             <FaGooglePlay className="icon" />
//             <div className="text">
//               <small>GET IT ON</small>
//               <strong>Play Store</strong>
//             </div>
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hero;

import "./Hero.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import livoLogo from "../../public/images/livo.png";
const words = ["FIELD", "FARM", "AGRI", "CROP"];


function Hero() {
  

  // animation stages
  const [stage, setStage] = useState("intro");
  // intro → hold → exit → showMain

  // word rotation
  const [index, setIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setFade(true);
    }, 1000);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  // timeline control
  // useEffect(() => {
  //   const t1 = setTimeout(() => setStage("hold"), 1200);
  //   const t2 = setTimeout(() => setStage("exit"), 2000);
  //   const t3 = setTimeout(() => setStage("showMain"), 2800);

  //   return () => {
  //     clearTimeout(t1);
  //     clearTimeout(t2);
  //     clearTimeout(t3);
  //   };
  // }, []);

  useEffect(() => {
  const t1 = setTimeout(() => setStage("hold"), 1200);
  const t2 = setTimeout(() => setStage("exit"), 2000);
  const t3 = setTimeout(() => setStage("showMain"), 2800);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
  };
}, []);
  return (
    <div className="hero">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="../../public/images/livo-logo.png" alt="LIVO Logo" />
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Community</li>
        </ul>

        <a
          href="https://play.google.com/store/apps/details?id=com.revin.livo"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download App
        </a>
      </nav>

      {/* HERO */}
      <div className="hero-image">

        <div className="hero-center">

          {/* BIG LIVO */}
          {stage !== "showMain" && (
            // <div className={`intro-livo ${stage}`}>
            //   LIVO
            // </div>
            <div className={`intro-livo ${stage}`}>
              <img src={livoLogo} alt="livo" className="livo-img-intro" />
            </div>
          )}

          {/* MAIN CONTENT */}
          {stage === "showMain" && (
            <div className="main-content show">

              {/* <h1>
                YOUR{" "}
                {/* <span className="word-wrapper">
                  <span key={index} className="changing-word animate">
                    {words[index]}
                  </span>
                </span> */}
                {/* <span className="word-wrapper">
                <span className={`word current ${fade ? "show" : "hide"}`}>
                  {words[index]}
                </span>

                <span className={`word next ${fade ? "hide" : "show"}`}>
                  {words[(index + 1) % words.length]}
                </span>
              </span>
                <span className="profit-word">COMPANION</span>
              </h1> */} 
              <h1>
                  YOUR{" "}
                  
                  <span className="word-wrapper">
                    <span className={`word current ${fade ? "show" : "hide"}`}>
                      {words[index]}
                    </span>

                    <span className={`word next ${fade ? "hide" : "show"}`}>
                      {words[(index + 1) % words.length]}
                    </span>
                  </span>

                  {" "}COMPANION
                </h1>

              <p>
                “Your Agri Companion From First Seed To Final Harvest”
              </p>

            </div>
          )}

        </div>

        {/* FARMER */}
        <img src="/images/farmer.png" alt="farmers" className="farmer-img" />

      </div>

      {/* SOIL + DOWNLOAD */}
      <div className="soil-section">

        <div className="bottom-download">

          {/* APP STORE (TEMP SAME LINK) */}
          <a
            href="https://play.google.com/store/apps/details?id=com.revin.livo"
            target="_blank"
            rel="noopener noreferrer"
            className="store-btn"
          >
            <FaApple className="icon" />
            <div className="text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </a>

          {/* PLAY STORE */}
          <a
            href="https://play.google.com/store/apps/details?id=com.revin.livo"
            target="_blank"
            rel="noopener noreferrer"
            className="store-btn"
          >
            <FaGooglePlay className="icon" />
            <div className="text">
              <small>GET IT ON</small>
              <strong>Play Store</strong>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Hero;
// import "./Hero.css";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const words = ["FIELDS", "FARMING", "AGRI", "CROP"];

// function Hero() {
//   // const [index, setIndex] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setIndex((prev) => (prev + 1) % words.length);
//   //   }, 2000);

//   //   return () => clearInterval(interval);
//   // }, []);
//   useEffect(() => {
//   const interval = setInterval(() => {
//     setFade(false);

//     setTimeout(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//       setFade(true);
//     }, 200); // fade out first
//   }, 2000);

//   return () => clearInterval(interval);
// }, []);

//   return (
//     <div className="hero">

//       {/*  NAVBAR */}
//       <nav className="navbar">
//         <div className="logo">LIVO</div>

//         <ul className="nav-links">
//           <li className="active">Home</li>
//           <li>Features</li>
//           <li>Pricing</li>
//           <li>Community</li>
//         </ul>

//         <button className="download-btn">Download App</button>
//       </nav>

//       {/*  HERO */}
//       <div className="hero-image">

//         {/* TEXT */}
//         <div className="hero-center">
//           <h1>
//             MAKES YOUR
//             <span className="changing-word">{words[index]}</span>
//             <span className="profit-word">PROFITABLE</span>
//           </h1>

//           <p>
//             “Your Field’s Companion From First Seed To Final Harvest”
//           </p>
//         </div>

//         {/* FARMER */}
//         <img src="../../public/images/farmer.png" alt="farmer" className="farmer-img" />
//       </div>

//       {/*  SOIL + BUTTONS */}
//       <div className="soil-section">
//         <div className="bottom-download">
//           <button className="store-btn">
//             <FaApple className="icon" />
//             <div className="text">
//               <small>Download on the</small>
//               <strong>App Store</strong>
//             </div>
//           </button>

//           <button className="store-btn">
//             <FaGooglePlay className="icon" />
//             <div className="text">
//               <small>GET IT ON</small>
//               <strong>Play Store</strong>
//             </div>
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hero;