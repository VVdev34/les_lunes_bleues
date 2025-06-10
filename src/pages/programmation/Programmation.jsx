import { useState } from 'react';
import imgL from "../../assets/LOGO-VR4-.png";
import "./programmation.scss";
import { motion, AnimatePresence } from "framer-motion";
import Papatef from "./Papatef";
import Plastique from "./Plastique";
import Mixeuses from "./Mixeuses";
import Hamelet from "./Hamelet";
import Gab from "./Gab";
import Melys from "./Melys";
import Tete from "./Tete";
import { useAnimation } from "../../context/AnimationContext";

function Programmation() {
  // State pour les modales
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  
  // Variants optimisés pour une animation plus stable
  const textVariants = {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const textVariants2 = {
    initial: {
      opacity: 0,
      x: 20
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const sliderVariants = {
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const carteVariants = {
    initial: { 
      opacity: 0, 
      y: 15 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    whileHover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <>
      <motion.h2 
        className="titre"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        La Programmation
      </motion.h2>
      
      <div className="containerP">
        <motion.img 
          src={imgL} 
          alt="Les lunes bleues" 
          className="imgL"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div
          className="part1 will-change-transform"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h1>Vendredi 27 Juin</h1>
          <div className="prog">
            {/* Chaque carte avec une stagger animation */}
            <motion.div 
              className="carte will-change-transform" 
              variants={carteVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              layoutId="fanfare-card"
              transition={{
                layout: { duration: 0.3 }
              }}
            >
              <p>17h00 - Fanfare en déambulation</p>
              <article>
                Départ depuis le Théâtre municipal de Béziers, en direction du centre-ville,<br />avec une arrivée à l'amphithéâtre à 18h30. Présence sur le site jusqu'à 19h.<br />
                Venez suivre le parcours musical de la <span>Fanfare des Lunes Bleues</span>!<br /> Une traversée joyeuse et festive qui ravira petits et grands,<br /> en revisitant des standards musicaux à travers plusieurs lieux emblématiques du centre-ville de Béziers.
              </article>
            </motion.div>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                17h00 — Ouverture du site
              </p>
              <article>
                Apéro + Vernissage + Ateliers découverte pour les enfants : cirque, photo, etc.
              </article>
            </motion.div>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                18h00 <span>- Dégustation Wine Wo-Man Show avec Radio Clapas</span>
              </p>
              <article>
                Une dégustation commentée de vins nature et bio, en compagnie de vigneronnes et vignerons passionnés. Découvrez leurs secrets, leurs pratiques, et leurs singularités.<br />
              </article>
            </motion.div>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                19h45<span>- Mot de bienvenue et lancement du festival</span>
              </p>
              <article>
                Allumage collectif de la <span>Lune Bleue</span>, symbole poétique d'ouverture du festival.
              </article>
            </motion.div>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                20h00<span>- Théâtre : "Pièce en plastique"</span>
              </p>
              <article>
                Michael et Ulrike, débordés par leur vie professionnelle et les bouleversements liés à la puberté précoce de leur fils, engagent Jessica comme femme de ménage. Mais très vite, sa présence soulève des questions troublantes… Une comédie grinçante sur les rapports sociaux, l'art et les apparences.
                <br />-<span className="infos" onClick={() => setOpenModal(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal && <Plastique open={openModal} onClose={() => setOpenModal(false)} />}
            </AnimatePresence>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                21h30<span>- Concert : "Mélys" (folk en français, anglais et espagnol)</span>
              </p>
              <article>
                Entre anglais et espagnol, sa musique vibre de mélancolie lumineuse, d'images sensibles et de sons suspendus. Une folk intime, puissante et pleine de grâce.
                <br />-<span className="infos" onClick={() => setOpenModal2(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal2 && <Melys open={openModal2} onClose={() => setOpenModal2(false)} />}
            </AnimatePresence>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                22h30<span>- Concert : Gabriel Tur — "Monade" (rock-électro en armure de chevalier)</span>
              </p>
              <article>
                Artiste pluridisciplinaire, Gabriel Tur propose un concert performé en armure, symbole d'un voyage intérieur et de déconstruction des stéréotypes de genre.
                <br />-<span className="infos" onClick={() => setOpenModal3(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal3 && <Gab open={openModal3} onClose={() => setOpenModal3(false)} />}
            </AnimatePresence>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                23h30<span>- DJ Set : Les Mixeuses Solidaires</span>
              </p>
              <article>
                Collectif de 18 DJ femmes du Sud de la France engagé pour l'inclusion et la diversité.
                Déjà vues au Festival de Thau, Palmarosa Festival…
                <br />-<span className="infos" onClick={() => setOpenModal4(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal4 && <Mixeuses open={openModal4} onClose={() => setOpenModal4(false)} />}
            </AnimatePresence>
            
            <motion.div 
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                01h00<span>- Fermeture</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="part2 will-change-transform"
          variants={textVariants2}
          initial="initial"
          animate="animate"
        >
          <h1>Samedi 28 Juin</h1>
          <div className="prog">
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                16h00 - Ouverture <span></span>
              </p>
              <article>Ateliers découverte pour les enfants : cirque, photo, etc.
                DJ Set ambiance avec <br /><span>Les Tchwinx</span> à 16h et 18h.</article>
            </motion.div>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                16h00 et 16h30
                <span>- Théâtre Jeunesse : "Pas de panique, Petit Crabe"</span>
              </p>
              <article>
                Deux séances de 20 minutes
                Pour les enfants de 1 à 10 ans
                Inspiré de l'album de Chris Haughton (éd. Thierry Magnier). Une plongée colorée et chantée dans l'univers marin,<br /> pour surmonter ses peurs et explorer le monde.
              </article>
            </motion.div>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                17h00<span>- Dégustation Wine Wo-Man Show avec Radio Clapas</span>
              </p>
              <article>
                Dégustation et interview décalée avec des vigneron.nes du
                terroir biterrois
              </article>
            </motion.div>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                18h30<span>- Théâtre : "C'est qui Hamlet ?!"</span>
              </p>
              <article>
                Avec l'atelier théâtre des Lunes Bleues: Les habitants du centre ville de Béziers et <br /> le Grand Cerf Bleu.
                Présentation du travail mené durant les vacances scolaires dans le cadre du contrat de ville, en partenariat avec la Maison de Quartier Vaclav Havel et l'association FOTE.
                Hamlet, ce héros shakespearien… mais au fond,<br /> <span>c'est qui Hamlet aujourd'hui ?</span> -<span className="infos" onClick={() => setOpenModal5(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal5 && <Hamelet open={openModal5} onClose={() => setOpenModal5(false)} />}
            </AnimatePresence>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                19h00<span>- DJ Set ambiance avec Les Tchwinx</span>
              </p>
            </motion.div>

            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                20h00<span>- Théâtre : "Tête à tête avec des bêtes sauvages"</span>
              </p>
              <article>
                Un huis clos contemporain : trois amis s'isolent à la campagne. Le cadre paisible devient le théâtre de tensions profondes, révélant des instincts enfouis et des angoisses primitives. 
                -<span className="infos" onClick={() => setOpenModal6(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal6 && <Tete open={openModal6} onClose={() => setOpenModal6(false)} />}
            </AnimatePresence>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                21h30<span>— Concert : "PAPATEF" (Cyril Atef)</span>
              </p>
              <article>
                Afrobeat dansant — percussions, platines, chant et groove !
                Connu pour ses collaborations avec -M-, Gotan Project, Natalia Lafourcade, Bumcello, etc.
                Un voyage vers la transe<br /> à ne pas manquer.
                <br />-<span className="infos" onClick={() => setOpenModal7(true)}>plus d'informations</span>
              </article>
            </motion.div>
            <AnimatePresence>
              {openModal7 && <Papatef open={openModal7} onClose={() => setOpenModal7(false)} />}
            </AnimatePresence>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                00h00<span>- DJ Set : Les Tchwinx</span>
              </p>
            </motion.div>
            
            <motion.div
              className="carte will-change-transform"
              variants={carteVariants}
              whileHover="whileHover"
            >
              <p>
                01h00<span>- Fermeture</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Programmation;
