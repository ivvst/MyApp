


import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext.jsx';
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
import AuthGuards from './components/guards/AuthGuards.jsx';
import AuthorizedCreateGalleryForm from './components/guards/AuthorizedCreateGalleryForm.jsx';




function App() {
  return (
    <AuthProvider>

      <div>
        <Navigation />
        <Header />


        <main className="main">
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path="/details/:shipId" element={<ShipInfo />} />
            <Route path="/create-gallery/:shipId" element={<AuthorizedCreateGalleryForm />} />
            <Route path={Path.Catalog} element={<Catalog />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<AuthGuards />}>
              <Route path={Path.Create} element={<Create />} />
              <Route path='/edit/:shipId' element={<Edit />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

          </Routes>

          <Footer />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App
