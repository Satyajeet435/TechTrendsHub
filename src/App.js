import React from "react";
import { Routes, Route } from "react-router-dom";  // ✅ No need for BrowserRouter here
import Navbar from "./components/Navbar";  
import Contact from "./components/contact";   // ✅ Fixed import (Capital "C")
import About from "./components/About";
import BlogList from "./components/BlogList";
import SmartphoneComparison from "./components/SmartphoneComparison";

function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/" element={<h1>Welcome to Tech Hub</h1>} /> 
        <Route path="/blog" element={<BlogList />} />  
        <Route path="/compare" element={<SmartphoneComparison />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/about" element={<About />} />  
      </Routes>
    </>
  );  
}

export default App;
