import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./components/about/AboutPage";
import ServicePage from "./components/service/ServicePage";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
