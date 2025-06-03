import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";

export default function Sidebar({ children }) {
  const menuitem = [
    {
      title: "Accueil",
      path: "/",
    },
    {
      title: "Les Lunes Bleues ? ",
      path: "/histoire",
    },
    {
      title: "Programmation 2025",
      path: "/programmation",
    },
    {
      title: "Ateliers",
      path: "/atelier",
    },
    {
      title: "Contacts",
      path: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  // Variants améliorés pour l'icône du burger menu
  const burgerVariants = {
    closed: { 
      rotate: 0,
      backgroundColor: "rgba(27, 62, 117, 0)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    open: { 
      rotate: 180,
      backgroundColor: "rgba(27, 62, 117, 0.9)",
      color: "#fff",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  // Variants pour le menu
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  // Variants pour les liens
  const linkVariants = {
    closed: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  return (
    <div className="container">
      <motion.div
        className="bars"
        onClick={toggle}
        variants={burgerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <FontAwesomeIcon icon={faBars} />
      </motion.div>
        <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="sidebar"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          ><div className="menu">
            <div className="links">
              {menuitem.map((item, index) => (
                <motion.div 
                  key={index}
                  className="menu-item"
                  variants={linkVariants}
                >
                  <NavLink 
                    to={item.path} 
                    onClick={toggle}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    style={{ zIndex: 10001, position: "relative" }}
                  >
                    <div className="link_title">{item.title}</div>
                  </NavLink>
                </motion.div>
              ))}
            </div>          </div>
        </motion.div>
        )}
      </AnimatePresence>      
      <main className="main-container">{children}</main>
    </div>
  );
}
