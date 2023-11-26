import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;
