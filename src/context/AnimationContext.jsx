import React, { createContext, useContext } from "react";

// Standard animation settings - optimisés pour éviter les sauts
export const standardTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96], // Courbe d'accélération plus naturelle
  staggerChildren: 0.1
};

export const pageVariants = {
  initial: { 
    opacity: 0,
    y: 10
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      ...standardTransition,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

export const cardVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: standardTransition
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const AnimationContext = createContext({
  standardTransition,
  pageVariants,
  cardVariants
});

export const AnimationProvider = ({ children }) => {
  return (
    <AnimationContext.Provider value={{ 
      standardTransition, 
      pageVariants, 
      cardVariants
    }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);