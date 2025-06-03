import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext";
import Logo from "../../components/Logo";
import "./acceuil.scss";

const Acceuil = () => {
  const { standardTransition } = useAnimation();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  return (
    <div className="acceuil-container">
      <motion.div
        className="logo-container will-change-transform"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="festival-title" variants={itemVariants}>
          Festival Les Lunes Bleues
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="will-change-transform"
        >
          <Logo />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Acceuil;
