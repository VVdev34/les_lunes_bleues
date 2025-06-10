import React from "react";
import "../histoire/histoire.scss";
import H_pic from "../../assets/h_img.jpg";
import W_pic from "../../assets/lb_2023_water.jpeg";
import S_pic from "../../assets/lb_2023_sit.jpg";
import V_pic from "../../assets/Lunesbleus-13.jpg";

import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const photoVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};
const photoVariants2 = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};
const photoVariants3 = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const photoVariants4 = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Histoire() {
  return (
    <>
    <h2 className="qui">Qui sommes nous ? </h2>
    <div className="mainContainer">
    <div className="h_container">
        <motion.p variants={textVariants} initial="initial" animate="animate">
          Créé et organisé par le Collectif le Grand Cerf Bleu, le Festival Les
          Lunes Bleues propose une programmation théâtrale et musicale
          accessible à tous, un moment festif de dégustation de produits locaux,
          un temps de partage convivial pour petits et grands , adressé à tous
          les biterrois.ses et les habitant.e.s autour. Mais les Lunes Bleues,
          ce sont aussi : Des ateliers d’initiations au théâtre menés toute
          l’année avec les habitant.e.s des quartiers prioritaires de la ville
          de Béziers. C’est la création d’un spectacle mêlant amateurs et
          professionnels présenté au public lors du festival. Un temps
          d'exposition des associations du centre-ville de Béziers. Des ateliers
          pour les enfants et les familles en juillet, en plein air dans les
          parcs du centre-ville. Des sorties au spectacle dans les théâtres de
          Béziers et au Festival d’Avignon. Le point d’orgue reste notre
          festival qui aura lieu pour sa deuxième édition dans l’amphithéâtre du
          Pont vieux , les Vendredi 27 et Samedi 28 Juin 2025. En 2023 pour la
          pré-édition nous avions rassemblé plus de 500 personnes, et près du double pour notre édition 2024. Nous
          souhaitons pérenniser ce festival et créer ainsi un temps fort
          culturel annuel incontournable à Béziers et sur le territoire.
        </motion.p>
      </div>
      <div className="pic">
          <motion.img src={H_pic} alt="" variants={photoVariants} initial="initial" animate="animate"/>
          <motion.img src={S_pic} alt="" variants={photoVariants3} initial="initial" animate="animate"/>
          <motion.img src={V_pic} alt="" variants={photoVariants4} initial="initial" animate="animate"/>
      </div>
    </div>  
    </>
  );
}
