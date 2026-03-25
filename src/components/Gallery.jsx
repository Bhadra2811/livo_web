import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h2>Our Community Drives Us</h2>

      <div className="grid-gallery">

        <div className="item item1">
          <img src="/images/1.png" />
        </div>

        <div className="item item2">
          <img src="/images/2.png" />
        </div>

        <div className="item item3">
          <img src="/images/3.png" />
        </div>

        <div className="item item4">
          <img src="/images/4.png" />
        </div>
        <div className="item item5">
          <img src="/images/5.png" />
        </div>
        <div className="item item6">
          <img src="/images/6.png" />
        </div>

        {/* <div className="item item5 split">
        <img src="/images/5.png" />
        <img src="/images/6.png" />
        </div> */}


      </div>
    </div>
  );
}

export default Gallery;