import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "80%",
  margin: "10px auto",
  padding: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "blue",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default Contact;
