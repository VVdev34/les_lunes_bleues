import React from "react"
import {motion} from "framer-motion";
import "./atelier.scss"
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";



const textVariants = {
  initial: {
      x:-500,
      opacity:0,
  },
  animate: {
      x:0,
      opacity:1,
      transition :{
          duration: 2,
      }
  },

}

export default function Ateliers() {

  return (
    <>
  
    <div className="textA">
      <h2>Les ateliers de théâtre</h2>
      <motion.p variants={textVariants} initial="initial" animate="animate">
      Eh oui ! Les Lunes bleues en plus d'être un chouette festival en Juin c'est aussi une action culturelle dans les quartiers du centre de ville de Béziers menée par la compagnie du Grand Cerf Bleu toute l'année.
C'est quoi ces ateliers alors ? 
      </motion.p>
      <img src={pic1} alt="" />
      <motion.p variants={textVariants} initial="initial" animate="animate">
      L'atelier Lunes Bleues s'adresse à des personnes entre 8 et 90 ans n’ayant pas forcément déjà eu de pratique théâtrale ou artistique. Il est particulièrement dirigé vers les habitant.e.s du centre ville de Béziers . Nous y travaillerons autour d’exercices adaptés le plus possible à chacune des personnes présentes.
Celles et ceux qui veulent peuvent participer à un spectacle construit ensemble et qui sera donné en ouverture de soirée lors du festival à l’amphithéâtre du pont vieux les 8 et 9 Juin.
      </motion.p>
      <img src={pic2} alt="" />
      <motion.p variants={textVariants} initial="initial" animate="animate">
      C'est l'occasion de monter sur scène et quelle magnifique scène !
Cette année nous revisitons les grands mythes grecques, notamment l’histoire d’Oreste et de sa famille ,assez, voire très compliquée. Dans la mythologie grecs, Oreste est un Atride, fils du roi Agamemnon et de Clytemnestre. Il est le frère cadet d'Iphigénie et d'Électre ainsi que de Chrysothémis.
Avec malice nous avons fait se rencontrer les dieux de l’olympe et les humains dans une histoire universelle qui nous vient de l’origine du théâtre. C’est un vrai plaisir de voir ces habitants et habitantes devenir petit à petit des acteurs et actrices avec amusement, professionnalisme et bienveillance.
      </motion.p>
      <img src={pic3} alt="" />
    </div>
    </>
  )
}