


import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext.jsx';
import Path from './path.js';

import Navigation from './components/navigation/Navigation.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import ShipInfo from './components/catalog/ShipInfo.jsx';
import Create from './components/create/Create.jsx';
import Edit from './components/edit/Edit.jsx';
import Footer from "./components/footer/Footer.jsx";
import Logout from './components/logout/Logout.jsx';
import AuthGuards from './components/guards/AuthGuards.jsx';
import OfflineErrorBoundary from './components/OfflineErrorBoundary.jsx';
import CatalogNewest from './components/catalog-newShip/CatalogNewest.jsx';
import Unauthorized from "./components/error/Unauthorized.jsx"
import NotFoundPage from './components/error/NotFoundPage.jsx';

const NotFound = () => <h2>404 Not Found</h2>;



function App() {
  return (
    <OfflineErrorBoundary>
      <AuthProvider>
        <div>
          <Navigation />
          <Header />


          <main className="main">


            <Routes>
              <Route path={Path.Home} element={<Home />} />
              <Route path={Path.Catalog} element={<Catalog />} />
              <Route path="/details/:shipId" element={<ShipInfo />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<AuthGuards />}>
                <Route path={Path.NewestShip} element={<CatalogNewest />} />
                <Route path={Path.Create} element={<Create />} />
                <Route path='/edit/:shipId' element={<Edit />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path='/unauthorized' element={<Unauthorized />} />
              </Route>
              <Route path="/notfound" element={<NotFoundPage />} />
              <Route path="*" element={<NotFound />} />



            </Routes>
            <Footer />
          </main>
        </div>
      </AuthProvider >
    </OfflineErrorBoundary >
  );
}

export default App
