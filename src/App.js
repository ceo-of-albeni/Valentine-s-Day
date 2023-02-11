import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import ProfilePage from "./page/profilePage/ProfilePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProfilePage />
      <Footer />
    </div>
  );
};

export default App;
