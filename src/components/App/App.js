import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import { Navbar } from "../Navbar/Navbar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="mt-5">
        <div className="container-fluid">
          <Routing />
        </div>
      </main>
    </Router>
  );
};
