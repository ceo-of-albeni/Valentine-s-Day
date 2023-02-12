import React from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UserContextProvider from "./context/userContext";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <UserContextProvider>
        <Navbar />
        <Routing />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default App;