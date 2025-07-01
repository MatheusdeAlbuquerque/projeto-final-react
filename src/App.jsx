import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard.jsx";
import Profile from "./components/pages/Profile.jsx";
import Settings from "./components/pages/Settings.jsx";
import Home from './components/pages/Home.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rota que vai automaticamente para home*/}
        <Route path="/" element={<Home/>} />

        {/*Rota que vai para o home se eu colocar na url /home */}
        <Route path='/home' element={<Home/>} />

        {/*Rotas Aninhadas, ele vai ter as suas rotas filhas que serão dashboard/profile e dashboard/settings */}
        <Route path="/dashboard" element={
          <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          >
          <Route path="profile" element={ <Profile />} />
          <Route path="settings" element={ <Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    