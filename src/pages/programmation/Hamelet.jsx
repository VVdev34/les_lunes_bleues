import React from "react";
import PhotoA from "../programmation/artistes/photos/hamelet.jpg";
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

const Hamelet = ({ open, onClose }) => {
  if (!open) return null;
  
  // Empêche le défilement de la page quand la modale est ouverte
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);
  
  return (
    <motion.div
      className="modalContainer will-change-transform fix-flicker"
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="hamelet-modal"
      layoutId="hamelet-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="Hamelet" />
        <h1>C'est qui Hamlet ?!</h1>
        <p>Avec l'atelier théâtre des Lunes Bleues</p>
        <article>
          Présentation du travail mené durant les vacances scolaires dans le cadre du contrat de ville, en partenariat avec la Maison de Quartier Vaclav Havel et l'association FOTE.
          
          Hamlet, ce héros shakespearien… mais au fond, c'est qui Hamlet aujourd'hui ? Les habitants du centre-ville de Béziers se sont approprié cette question et vous proposent leur vision contemporaine et collective de ce personnage emblématique, guidés par la compagnie Le Grand Cerf Bleu.
        </article>
      </div>
    </motion.div>
  );
};

export default Hamelet;
