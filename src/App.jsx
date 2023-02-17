import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Why } from "./components/Why";
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init()
  })
  return (
    <>
      <Navbar/>
      <Why/>
    </>
  );
}

export default App;
