import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

