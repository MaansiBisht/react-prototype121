import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import styles from './styles/style.scss';
import { ParallaxProvider } from 'react-scroll-parallax';


function NotFound() {
  return <div style={{textAlign:"center",fontSize:"80px",padding:"270px"}}> Not Found !!!</div>;
}

function App() {
  return (
    <ParallaxProvider>
    <BrowserRouter basename="/">
      <Navbar/>
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
