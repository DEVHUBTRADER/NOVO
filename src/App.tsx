import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AdminPanel } from './components/AdminPanel';
import { EmailAuth } from './components/EmailAuth';
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública - Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rota administrativa - MODO DESENVOLVIMENTO (sem proteção) */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Redirect qualquer rota inválida para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;