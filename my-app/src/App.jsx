

import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as authService from './services/authService.js'
import AuthContext from './contexts/authContext.js';
import Path from './path.js';

import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import ShipInfo from './components/catalog/ShipInfo.jsx';
import Create from './components/create/Create.jsx';
import Edit from './components/edit/Edit.jsx';
import Footer from "./components/footer/Footer.jsx";
import Logout from './components/logout/Logout.jsx';




function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {

    localStorage.removeItem('accessToken');
    return {};

  });

  const loginSubmitHandler = async (values) => {
    //TODO NOTIFICATION WHEN SOMETHING DOES NOT MATCH OR THERE IS SOME ERROR
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    console.log(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  }


  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.username, values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);


    navigate(Path.Home);

  }

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem('accessToken');
    navigate(Path.Home)
  };


  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,

    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
    userId: auth._id,
  };

  return (
    <AuthContext.Provider value={values}>

      <div>
        <Navigation />
        <Header />


        <main className="main">
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path="/details/:shipId" element={<ShipInfo />} />
            <Route path={Path.Catalog} element={<Catalog />} />
            <Route path={Path.Create} element={<Create />} />
            <Route path='/edit/:shipId' element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={Path.Logout} element={<Logout />}></Route>



          </Routes>

          <Footer />
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App
