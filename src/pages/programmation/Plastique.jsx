import React from "react";
import PhotoA from "../programmation/artistes/photos/plastique.png";
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

const Plastique = ({ open, onClose }) => {
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
      key="plastique-modal"
      layoutId="plastique-modal"
    >
      <div className="content-wrapper">
        <p className="close" onClick={onClose}>Fermer</p>
        <img src={PhotoA} alt="Pièce en plastique" />
        <h1>Par la Cie Capharnaüm</h1>
        <p>
          Texte : Marius Von Mayenburg
          <br />Mise en scène : Louiza Meffrer
          <br />Durée : 1h20
        </p>
        <h1>Distribution :</h1>
        <p>
          Thomas Radisson, Fanny Pros-Boucle, Louis Andrieu, Mati Galey, Anne Mathon
        </p>
        <article>
          Michael et Ulrike ne savent plus où donner de la tête : accaparés par leur travail et déroutés par la puberté précoce de leur fils, ils engagent Jessica comme femme de ménage, pour les soulager un peu. Ils croient sauver leur vie de famille en apparence idyllique. Jessica devient rapidement essentielle à tous. Mais qui est, au juste, cette femme dont la présence physique s'affirme de jour en jour ? Comment se comporter « comme il faut » avec elle ? Qu'offre-t-on à sa femme de ménage pour Noël ? Est-il socialement envisageable de nouer des liens amicaux avec elle ? Un jour, le chef d'Ulrike, Haulupa, artiste plasticien, remarque la séduisante Jessica et décide de l'engager comme performeuse. Une pièce acide et cinglante sur les rapports sociaux, le pouvoir de l'art et celui de l'argent.
        </article>
      </div>
    </motion.div>
  );
};

export default Plastique;
