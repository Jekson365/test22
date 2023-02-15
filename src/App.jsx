import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Why } from "./components/Why";
import './styles/main.scss'

function App() {
  return (
    <>
      <Navbar/>
      <Why/>
    </>
  );
}

export default App;
