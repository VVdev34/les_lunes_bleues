import React from "react";
import PhotoA from "../programmation/artistes/photos/tete.jpg";
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

const Tete = ({ open, onClose }) => {
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
      key="tete-modal"
      layoutId="tete-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="Tête à tête avec des bêtes sauvages" />
        <h1>Par la God Bless Compagnie</h1>
        <p>
          Texte : Gracia Morales & Juan Alberto Salvaterria
          <br />Mise en scène : Agnès Laboissette
          <br />Durée : ~1h
        </p>
        <h1>Distribution</h1>
        <p>
          <strong>Texte :</strong> Gracia Morales et Juan Alberto Salvaterria<br />
          <strong>Mise en scène :</strong> Agnès Laboissette<br />
          <strong>Interprètes :</strong> Arthur Combelles, Sabine Moulia et Agnès Laboissette<br />
          <strong>Création sonore :</strong> Raphaël Delunsch<br />
          <strong>Création lumière :</strong> Maéva Roure<br />
          <strong>Regard extérieure :</strong> Manon Petitpretz<br />
          <strong>Graphisme :</strong> Claire Laboissette
        </p>
        <article>
          Un huis clos contemporain : trois amis s'isolent à la campagne. Le cadre paisible devient le théâtre de tensions profondes, révélant des instincts enfouis et des angoisses primitives.
          
          "Qu'est-ce qu'on fait là, nous, citadins, au milieu de la nature ?"
          
          Tête à tête avec des bêtes sauvages est un huis clos qui met en jeu trois personnages d'une trentaine d'années qui décident de passer un week-end entre amis à la campagne. Déconnectés de tout, ils cherchent à échapper au stress de la vie quotidienne.
          
          L'ambiance, tout d'abord joyeuse, va peu à peu se dégrader, comme si le lieu faisait ressortir l'égoïsme, l'irresponsabilité et la résignation qui sommeille en chacun d'eux. Coupés du monde, ils font alors face à leurs angoisses et cette menace permanente va mettre à rude épreuve leurs valeurs morales…
        </article>
      </div>
    </motion.div>
  );
};

export default Tete;
