import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";      // exacto: carpeta "home", archivo "Home.jsx"
import About from "./pages/about/About";   // carpeta "about", archivo "About.jsx"
import Contact from "./pages/contact/Contact"; // carpeta "contact", archivo "Contact.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

