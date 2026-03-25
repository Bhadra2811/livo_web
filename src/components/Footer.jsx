import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2 className="logo">LIVO <span>KRISHI</span></h2>

          <p>
            Building the next generation of smart agriculture solutions to
            empower farmers with better technology.
          </p>

          <div className="contact">
            <h4>Write to us on</h4>
            <p>contact@livo.com</p>
            <p>+91 9876543210</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Features</p>
          <p>Blog</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>

        {/* ADDRESS */}
        <div className="footer-address">
          <h4>Address</h4>
          <p>
            Technology Innovation Center,<br />
            Cochin, Kerala,<br />
            India - 682037
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 All rights reserved</p>

        <div className="socials">
            <a href="https://instagram.com/yourpage" target="_blank">
                <FaInstagram />
            </a>

            <a href="https://facebook.com/yourpage" target="_blank">
                <FaFacebook />
            </a>

            <a href="https://twitter.com/yourpage" target="_blank">
                <FaTwitter />
            </a>

            <a href="https://linkedin.com/company/yourpage" target="_blank">
                <FaLinkedin />
            </a>

            <a href="mailto:contact@livo.com">
                <FaEnvelope />
            </a>
            </div>
      </div>

    </footer>
  );
}

export default Footer;