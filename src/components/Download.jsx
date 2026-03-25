import "./Download.css";

function Download() {
  return (
    <div className="download-section">

      <div className="download-card">

        {/* LEFT SIDE */}
        <div className="download-left">
          <h2>Download the <span>App Now!</span></h2>

          <p>
            Experience smarter farming with real-time insights and tools.
          </p>

          {/* Buttons */}
          <div className="store-buttons">
            <a href="https://apps.apple.com" target="_blank">
              <button className="store-btn">App Store</button>
            </a>

            <a href="https://play.google.com" target="_blank">
              <button className="store-btn">Google Play</button>
            </a>
          </div>

          {/* Features */}
          <ul>
            <li>✔ Real-time crop tracking</li>
            <li>✔ Market insights</li>
            <li>✔ Secure payments</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="download-right">
          <p className="qr-title">Scan to Download</p>

          <div className="qr-box">
            <img src="/images/qr.png" alt="QR Code" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Download;