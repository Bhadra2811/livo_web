import "./Navbar.css";

function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => scrollToSection("home")}>
        <img src="/images/logo.png" alt="LIVO Logo" />
      </div>

      {/* LINKS */}
      <div className="nav-links">
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("gallery")}>Gallery</span>
        <span onClick={() => scrollToSection("features")}>Features</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </div>

    </nav>
  );
}

export default Navbar;