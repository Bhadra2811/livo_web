// import "./Gallery.css";

// function Gallery() {
//   return (
//     <div className="gallery">
//       <h2>Our Community Drives Us</h2>

//       <div className="grid-gallery">

//         <div className="item item1">
//           <img src="/images/1.png" />
//         </div>

//         <div className="item item2">
//           <img src="/images/2.png" />
//         </div>

//         <div className="item item3">
//           <img src="/images/3.png" />
//         </div>

//         <div className="item item4">
//           <img src="/images/4.png" />
//         </div>
//         <div className="item item5">
//           <img src="/images/5.png" />
//         </div>
//         <div className="item item6">
//           <img src="/images/6.png" />
//         </div>

//         {/* <div className="item item5 split">
//         <img src="/images/5.png" />
//         <img src="/images/6.png" />
//         </div> */}


//       </div>
//     </div>
//   );
// }

// export default Gallery;
import "./Gallery.css";
import { useEffect, useState } from "react";

function Gallery() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1200); // show stack first

    return () => clearTimeout(timer);
  }, []);

  // ✅ GIVE YOUR IMAGE NAMES HERE
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
    <div className="gallery">
      <div className={`grid-gallery ${animate ? "show" : ""}`}>

        {/* CENTER HEADING */}
        <h2 className="center-title">Our Community</h2>

        {/* IMAGES */}
        {images.map((img, i) => (
          <div className={`item item${i + 1}`} key={i}>
            <img src={`/images/${img}`} alt={`gallery-${i}`} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;