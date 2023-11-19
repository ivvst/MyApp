

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer.jsx";
import Header from './components/header/Header.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import Home from './components/home/Home.jsx';
import Edit from './components/edit/Edit.jsx';


import Register from './components/Register';
import Create from './components/create/Create.jsx';
import ShipInfo from './components/catalog/ShipInfo.jsx';
import Navigation from './components/Navigation.jsx';



function App() {

  return (
    <div>
      <Navigation/>
      <Header />
      <main className="main">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/details/:shipId" element={<ShipInfo />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path='/edit/:shipId' element={<Edit />} />



        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App
