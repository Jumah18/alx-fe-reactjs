const Footer = () => {
  return (
    <footer style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px", position: "absolute", bottom: 0, width: "100%" }}>
      &copy; {new Date().getFullYear()} My Company | All rights reserved.
    </footer>
  );
};

export default Footer;
