import React from "react";
import PhotoA from "../programmation/artistes/photos/melys.png";
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

const Melys = ({ open, onClose }) => {
  if (!open) return null;
  
  return (
    <motion.div 
      className="modalContainer will-change-transform fix-flicker"
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="melys-modal"
      layoutId="melys-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="Melys en concert" />
        <h1>Melys</h1>
        <p>Folk en français, anglais et espagnol</p>
        <article>
          Entre anglais et espagnol, sa musique vibre de mélancolie lumineuse, d'images sensibles et de sons suspendus. Une folk intime, puissante et pleine de grâce.
        </article>
      </div>
    </motion.div>
  );
};

export default Melys;
