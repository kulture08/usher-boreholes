import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeAllrounder from "./PAGES /HomePage/HomeAllrounder";
import AboutusAllRounder from "./PAGES /Aboutus/AboutusAllRounder"
import GalleryAllRounder from "./PAGES /Gallery/GalleryAllRounder"
import RequestAllRounder from "./PAGES /Request/RequestAllRounder"
import ContactAllRounder from "./PAGES /Contact/ContactAllRounder";
import Header from './PAGES /HomePage/Header'
import Banner from "./PAGES /HomePage/Banner";



function App() {
  return (
    <Router>
      <Header/>
      <Banner/>
    <Routes>
       <Route path="/" element={<HomeAllrounder/>} />
       <Route path="/AboutusAllRounder" element={< AboutusAllRounder/>} />
       <Route path="/GalleryAllRounder" element={< GalleryAllRounder/>} />
       <Route path="/RequestAllRounder" element={<RequestAllRounder/>} />
       <Route path="/ContactAllRounder" element={<ContactAllRounder/>} />
       </Routes>
    {/* <HomeAllrounder/> */}
  </Router>
  );
}

export default App;



