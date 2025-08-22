import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Header from "./Generic Views/Header";
import Footer from "./Generic Views/Footer";
import BackToTopButton from "./Components/BackToTopButton";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/Terms&Conditions";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/term-and-conditions" element={<TermsConditions/>}/>
          </Routes>
        </main>
        <Footer />
        <BackToTopButton/>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
