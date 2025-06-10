import React from "react";
import PhotoA from "../programmation/artistes/photos/mixeuses.jpg";
import "./artistes/artistes.scss";
import { motion } from "framer-motion";

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

const Mixeuses = ({ open, onClose }) => {
  if (!open) return null;
  
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
      key="mixeuses-modal"
      layoutId="mixeuses-modal"
    >
      <div className="content-wrapper" style={{ zIndex: 100001 }}>
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="Les Mixeuses Solidaires" />
        <h1>Les Mixeuses Solidaires</h1>
        <article>
          Collectif de 18 DJ femmes du Sud de la France engagé pour l'inclusion et la diversité dans le milieu des musiques électroniques.
          
          Déjà présentes sur de nombreuses scènes régionales comme le Festival de Thau, Palmarosa Festival et bien d'autres événements, les Mixeuses Solidaires proposent un DJ set énergique et inclusif qui saura faire danser tous les publics.
          
          Le collectif défend des valeurs d'entraide, de partage et s'engage activement pour plus de diversité dans un milieu traditionnellement masculin.
        </article>
      </div>
    </motion.div>
  );
};

export default Mixeuses;
