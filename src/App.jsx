import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Salon } from './pages/Salon';
import { Library } from './pages/Library';
import { Office } from './pages/Office';
import { Chamber } from './pages/Chamber';
import { Navigation } from './components/Navigation';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isChamber = location.pathname === '/chamber';

  React.useEffect(() => {
    if (isChamber) {
      document.body.classList.add('chamber-mode');
    } else {
      document.body.classList.remove('chamber-mode');
    }
  }, [isChamber]);

  return (
    <div className="app-container">
      {!isChamber && <Navigation />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/library" element={<Library />} />
          <Route path="/office" element={<Office />} />
          <Route path="/chamber" element={<Chamber />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
