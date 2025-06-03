import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "../context/AnimationContext";

const Layout = ({ children, location }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="page-content"
        style={{ 
          width: "100%", 
          height: "auto",
          minHeight: "100%",
          willChange: "opacity",
          position: "relative",
          overflow: "auto"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;