import React, { useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Animations variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter le code pour envoyer le formulaire
    console.log(formData);
    alert("Message envoyé! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="title">
          Contact
        </motion.h1>
        
        <motion.div className="contact-cards" variants={containerVariants}>
          <motion.div className="contact-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FaPhoneAlt />
            </div>
            <h3>Téléphone</h3>
            <a href="tel:06 88 03 75 61">06 88 03 75 61</a>
          </motion.div>
          
          <motion.div className="contact-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <a href="mailto:festivalleslunesbleues@gmail.com">festivalleslunesbleues@gmail.com</a>
          </motion.div>
          
          <motion.div className="contact-card" variants={itemVariants}>
            <div className="icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <h3>Adresse</h3>
            <p>Béziers, France</p>
          </motion.div>
        </motion.div>
        
        <motion.div className="social-section" variants={itemVariants}>
          <h2>Suivez Les Lunes Bleues</h2>
          <div className="social-links">
            <motion.a 
              href="https://www.facebook.com/festivalleslunesbleues" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/leslunesbleues/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
