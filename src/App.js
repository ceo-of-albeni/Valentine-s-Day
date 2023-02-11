import React from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
