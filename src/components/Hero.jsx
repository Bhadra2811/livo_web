import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="hero">

      {/* 🌾 HERO IMAGE */}
      <div className="hero-image">
        <div className="overlay">
          <h1>GROW SMART</h1>
          <h2>EARN MORE</h2>
        </div>
      </div>

      {/* 🟫 SOIL */}
      <div className="soil-section">
        <div className="bottom-download">

          <a href="https://apps.apple.com" target="_blank">
            <button className="store-btn">
              <FontAwesomeIcon icon={faApple} className="icon" />
              <div className="text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </button>
          </a>

          <a href="https://play.google.com" target="_blank">
            <button className="store-btn">
              <FontAwesomeIcon icon={faGooglePlay} className="icon" />
              <div className="text">
                <small>Get it on</small>
                <strong>Play Store</strong>
              </div>
            </button>
          </a>

        </div>
      </div>

    </div>
  );
}

export default Hero;