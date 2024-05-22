import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FloorPlan from "./pages/FloorPlan";
import PriceList from "./pages/PriceList";
import Master from "./pages/Master";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/floor" element={<FloorPlan />} />
        <Route path="/price" element={<PriceList />} />
        <Route path="/master" element={<Master />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  
    </>
  );
};

export default App;
