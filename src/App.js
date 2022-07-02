import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CreditScreen from './ui/screen/credit';
import DashboardScreen from './ui/screen/dashboard';
import LoginScreen from './ui/screen/login';
import RegisterScreen from './ui/screen/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />        
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/credit" element={<CreditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
