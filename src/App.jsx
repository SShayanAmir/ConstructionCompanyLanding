import { useState } from "react";
import { useLocation } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/main.scss";

// COMPONENTS
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// PAGES
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {
  const [exampleState, setExampleState] = useState("Hello World");

  const location = useLocation();
  const hideFooterOn = ["/Contact"];
  const shouldShowFooter = !hideFooterOn.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Service" element={<ServicePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
