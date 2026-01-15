import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ReservationModal } from './components/ReservationModal';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import MenuPage from './pages/MenuPage';
import SchedulePage from './pages/SchedulePage';

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white text-stone-800 font-sans selection:bg-stone-100 overflow-x-hidden">
        <Navbar onReserveOpen={() => setIsReserveOpen(true)} onHistoryOpen={() => {}} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>

        <ReservationModal isOpen={isReserveOpen} onClose={() => setIsReserveOpen(false)} />
      </div>
    </Router>
  );
}