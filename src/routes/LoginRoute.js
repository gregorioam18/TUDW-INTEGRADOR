import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

function LoginRoute() {
  const navigate = useNavigate();

  const handleLogin = ({ username, password }) => {
    // Validar credenciales
    if (username === 'admin' && password === 'admin') {
      // Redirigir al usuario a la página de gestión de alojamientos
      navigate('/gestion-de-alojamientos');
    } else {
      alert('Credenciales incorrectas. Intente de nuevo.');
    }
  };

  return (
    <>
      <Navbar />
      <Login onLogin={handleLogin} />
      <Footer />
    </>
  );
}

export default LoginRoute;
