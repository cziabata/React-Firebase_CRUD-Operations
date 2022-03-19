import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar.jsx";
import { Context } from "./index.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader.jsx";

function App() {
  const {auth} = useContext(Context);
  const [loading] = useAuthState(auth);

  if(loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
