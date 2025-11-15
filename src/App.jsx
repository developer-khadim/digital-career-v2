import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import ClickSpark from "./components/UI/ClickSpark";
import LandingPage from "./pages/LandingPage";


const App = () => {
  return (
    <ClickSpark
      sparkColor="#a3e635"
      sparkSize={50}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Layout >
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </ClickSpark>
  );
};

export default App;
