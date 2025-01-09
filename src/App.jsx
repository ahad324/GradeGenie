import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Converter from "./pages/Converter";
import GPA_Calculator_Page from "./pages/GPA_Calculator_Page";
import CGPA_Calculator_Page from "./pages/CGPA_Calculator_Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/gpa-calculator" element={<GPA_Calculator_Page />} />
        <Route path="/cgpa-calculator" element={<CGPA_Calculator_Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
