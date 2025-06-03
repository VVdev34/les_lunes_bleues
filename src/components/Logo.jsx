import React from "react";
import { motion } from "framer-motion";
import imgL from "../assets/LOGO-VR4-.png"
import "../components/logo.scss";

export default function Logo() {
  const sliderVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: [35, -25, 0],
      transition: {
        opacity: { duration: 0.5 },
        scale: { duration: 0.7 },
        rotate: {
          ease: "easeInOut",
          duration: 3,
          times: [0, 0.5, 1],
        }
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="img_container">
      <motion.img
        src={imgL}
        alt="Les Lunes Bleues Logo"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />
    </div>
  );
}
