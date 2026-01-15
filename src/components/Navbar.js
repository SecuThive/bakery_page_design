import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onReserveOpen, onHistoryOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-xl border-b border-gray-100 py-3' 
        : 'bg-gradient-to-b from-black/30 to-transparent py-6 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/')}>
          <div className="flex flex-col leading-tight">
            <span className={`text-2xl lg:text-3xl font-serif font-bold tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white'}`}>빵뜨락</span>
            <span className={`text-[9px] font-bold tracking-[0.2em] ${scrolled ? 'text-yellow-700' : 'text-yellow-300'}`}>INCHEON MASTER</span>
          </div>
        </div>
        
        <div className={`hidden lg:flex items-center space-x-2 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <button 
            onClick={() => navigate('/history')}
            className={`px-4 py-2 transition-all duration-300 relative group ${
              location.pathname === '/history' 
                ? 'font-semibold' 
                : 'hover:text-yellow-400'
            }`}
          >
            명장의 철학
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-yellow-700' : 'bg-yellow-300'} group-hover:w-full transition-all duration-300`}></span>
          </button>
          <button 
            onClick={() => navigate('/menu')}
            className={`px-4 py-2 transition-all duration-300 relative group ${
              location.pathname === '/menu' 
                ? 'font-semibold' 
                : 'hover:text-yellow-400'
            }`}
          >
            프리미엄 메뉴
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-yellow-700' : 'bg-yellow-300'} group-hover:w-full transition-all duration-300`}></span>
          </button>
          <button 
            onClick={() => navigate('/schedule')}
            className={`px-4 py-2 transition-all duration-300 relative group ${
              location.pathname === '/schedule' 
                ? 'font-semibold' 
                : 'hover:text-yellow-400'
            }`}
          >
            시간표
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-yellow-700' : 'bg-yellow-300'} group-hover:w-full transition-all duration-300`}></span>
          </button>
          <div className="w-px h-6 bg-white/30 mx-2"></div>
          <button 
            onClick={onReserveOpen} 
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              scrolled 
                ? 'bg-yellow-700 text-white hover:bg-yellow-800 shadow-md' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            예약
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
