import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import AboutUs  from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";






function App() {
  return (
    <>
    <BrowserRouter basename="/Html-to-React-">
   <Navbar/>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
      
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;