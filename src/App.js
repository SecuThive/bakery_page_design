import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BakeryProvider } from './context/BakeryContext';
import Navbar from './components/Navbar';
import { ReservationModal } from './components/ReservationModal';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import MenuPage from './pages/MenuPage';
import SchedulePage from './pages/SchedulePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  return (
    <BakeryProvider>
      <Router>
        <div className="bg-white text-stone-800 font-sans selection:bg-stone-100 overflow-x-hidden">
          <Navbar onReserveOpen={() => setIsReserveOpen(true)} onHistoryOpen={() => {}} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>

          <ReservationModal isOpen={isReserveOpen} onClose={() => setIsReserveOpen(false)} />
        </div>
      </Router>
    </BakeryProvider>
  );
}