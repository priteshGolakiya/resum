import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen"; // Import SplashScreen
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide SplashScreen after 5000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {showSplash && (
            <Route
              path="/"
              element={
                <SplashScreen onSplashComplete={() => setShowSplash(false)} />
              }
            />
          )}

          {!showSplash && (
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/services" element={<Services />} /> */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          )}

          {/* Redirect to home if the route is not matched */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
