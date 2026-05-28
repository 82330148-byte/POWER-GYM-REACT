import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Join from "./pages/Join";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Equipment from "./pages/Equipment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;