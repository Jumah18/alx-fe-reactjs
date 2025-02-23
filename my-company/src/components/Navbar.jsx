import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

const linkStyle = {
  color: "#fff",
  margin: "0 15px",
  textDecoration: "none",
  fontSize: "18px"
};

export default Navbar;
