import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CreditScreen from './ui/screen/credit';
import DashboardScreen from './ui/screen/dashboard';
import LoginScreen from './ui/screen/login';
import MapScreen from './ui/screen/map';
import RegisterScreen from './ui/screen/register';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />        
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/credit" element={<CreditScreen />} />
        <Route path="/map" element={<MapScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
