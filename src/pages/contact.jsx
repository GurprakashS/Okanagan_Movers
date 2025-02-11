// src/pages/contact.js
import React from "react";

const Contact = () => {
  return (
    <div>
      <h2> Contact Us </h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
