import React from "react";
import PhotoA from "../programmation/artistes/photos/papatef.jpeg";
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

const Papatef = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <motion.div 
      className="modalContainer will-change-transform fix-flicker" 
      variants={modalVariants} 
      initial="initial" 
      animate="animate"
      exit="exit"
      key="papatef-modal"
      layoutId="papatef-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="PAPATEF en concert" />
        <h1>PAPATEF (Cyril Atef)</h1>
        <article>
          Afrobeat dansant — percussions, platines, chant et groove !
          
          Connu pour ses collaborations avec -M-, Gotan Project, Natalia Lafourcade, Bumcello et bien d'autres, Cyril Atef alias PAPATEF propose un voyage vers la transe à ne pas manquer.
          
          Sa musique mêle percussions traditionnelles, électronique et voix dans un cocktail énergique qui invite irrémédiablement à la danse. Une expérience musicale immersive qui réunit les influences africaines, électroniques et world dans un set unique et vibrant.
        </article>
      </div>
    </motion.div>
  );
};

export default Papatef;
