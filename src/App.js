import React from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
