import React from "react";
import "./artistes/artistes.scss";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 10
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const Gab = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <motion.div 
      className="modalContainer will-change-transform fix-flicker" 
      variants={modalVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      key="gab-modal"
      layoutId="gab-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose} >Fermer</p>
        <h1>
          Gabriel Tur — "Monade"
        </h1>
        <p>Rock-électro en armure de chevalier</p>
        <article>
          Artiste pluridisciplinaire, Gabriel Tur propose un concert performé en armure, symbole d'un voyage intérieur et de déconstruction des stéréotypes de genre.
            
            Sa performance musicale mêle sonorités rock et électro dans une expérience immersive unique qui interroge les codes traditionnels tout en offrant un moment de musique intense et personnel.
          </article>
        </div>
      </motion.div>
 
  );
};

export default Gab;
