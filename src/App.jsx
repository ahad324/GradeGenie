import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import RouterConfig from "./router/Index";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <HelmetProvider>
      <Router>
        <Header />
        {loading ? <Loader /> : <RouterConfig />}
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
