import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      
      <p className="about-mission">
        Welcome to our Q&A platform, where knowledge meets collaboration! Our mission is to 
        provide a space for users to ask meaningful questions, share valuable insights, and 
        foster an engaging learning community.
      </p>

      <h2 className="about-subtitle">Why Choose Us?</h2>
      <ul className="about-list">
        <li>🌟 **Expert Community** – Get answers from experienced professionals and enthusiasts.</li>
        <li>🚀 **User-Friendly Interface** – Intuitive design for seamless navigation.</li>
        <li>🔒 **Secure & Reliable** – Privacy-focused with robust data protection.</li>
        <li>🎯 **Innovative Features** – AI-assisted suggestions, trending discussions, and personalized feeds.</li>
      </ul>

      <h2 className="about-subtitle">Who We Are</h2>
      <p className="about-story">
        Founded by <a href="https://github.com/iamnileshdutt" className="about-link">Nilesh Dutt</a>, our platform was 
        built with the vision of bridging the gap between curiosity and knowledge. With cutting-edge 
        technology and a passion for learning, we’re here to revolutionize how people connect and share 
        expertise.
      </p>

      <h2 className="about-subtitle">Join Our Community</h2>
      <p className="about-call-to-action">
        Whether you're looking for solutions, eager to share knowledge, or simply curious about 
        the world—this is the place for you. Start exploring, ask your questions, and be a part of 
        something extraordinary!
      </p>
    </div>
  );
};

export default About;