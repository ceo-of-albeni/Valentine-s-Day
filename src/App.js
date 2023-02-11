import React from "react";
import Routing from "./Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
<<<<<<<<< Temporary merge branch 1
import UserContextProvider from "./context/userContext";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <UserContextProvider>
        <Navbar />
        <Routing />
        <Footer />
      </UserContextProvider>
=========
import HomePage from "./page/HomePage";
import ProfilePage from "./page/profilePage/ProfilePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProfilePage />
      <Footer />
>>>>>>>>> Temporary merge branch 2
    </div>
  );
};

export default App;
