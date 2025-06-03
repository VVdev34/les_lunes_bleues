import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimationProvider } from "./context/AnimationContext";
import Sidebar from "./pages/global/Sidebar";
import Acceuil from "./pages/acceuil/Acceuil";
import Histoire from "./pages/histoire/Histoire";
import Programmation from "./pages/programmation/Programmation";
import Atelier from "./pages/atelier/Atelier";
import Contact from "./pages/contact/Contact";
import "./App.css";

// Wrapper component to access location
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Acceuil />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AnimationProvider>
      <Sidebar>
        <AnimatedRoutes />
      </Sidebar>
    </AnimationProvider>
  );
}

export default App;
