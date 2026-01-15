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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-md py-3 border-b border-yellow-100' 
        : 'bg-white/80 backdrop-blur-sm py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* 로고 */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-sm flex items-center justify-center shadow-md">
            <span className="text-white font-serif font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-serif font-bold text-gray-900 tracking-widest">빵뜨락</span>
            <span className="text-[8px] font-semibold tracking-[0.3em] text-yellow-700">명장 아틀리에</span>
          </div>
        </div>
        
        {/* 메뉴 */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700">
          <button 
            onClick={() => navigate('/history')}
            className={`text-sm font-light tracking-wide transition-all duration-300 ${
              location.pathname === '/history' 
                ? 'text-yellow-700 font-semibold' 
                : 'hover:text-yellow-600'
            }`}
          >
            명장 이야기
          </button>
          <button 
            onClick={() => navigate('/menu')}
            className={`text-sm font-light tracking-wide transition-all duration-300 ${
              location.pathname === '/menu' 
                ? 'text-yellow-700 font-semibold' 
                : 'hover:text-yellow-600'
            }`}
          >
            컬렉션
          </button>
          <button 
            onClick={() => navigate('/schedule')}
            className={`text-sm font-light tracking-wide transition-all duration-300 ${
              location.pathname === '/schedule' 
                ? 'text-yellow-700 font-semibold' 
                : 'hover:text-yellow-600'
            }`}
          >
            베이킹 일정
          </button>
          <a href="#" className="text-sm font-light tracking-wide hover:text-yellow-600 transition-colors">
            후기
          </a>
          <a href="tel:031-123-4567" className="text-sm font-light tracking-wide hover:text-yellow-600 transition-colors">
            연락처
          </a>
        </div>

        {/* 예약 버튼 */}
        <button 
          onClick={() => onReserveOpen?.(true)}
          className="px-6 py-2 border border-yellow-600 text-yellow-700 text-sm font-light hover:bg-yellow-50 transition-all"
        >
          예약하기
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
