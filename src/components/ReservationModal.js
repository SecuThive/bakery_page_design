import React from 'react';

export const ReservationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative z-10 bg-white w-full max-w-md rounded-[32px] p-10 shadow-3xl animate-in fade-in zoom-in-95 duration-300 border border-stone-100">
        <h4 className="text-stone-900 font-serif text-2xl mb-10 text-center">온라인 픽업 예약</h4>
        <div className="space-y-6">
          <div>
            <label className="text-[10px] text-stone-400 font-bold mb-3 block uppercase tracking-widest">방문 지점 선택</label>
            <div className="grid grid-cols-2 gap-3 text-xs">
               <button className="py-3 border border-stone-900 bg-stone-900 text-white rounded-xl">인천 본점</button>
               <button className="py-3 border border-stone-200 text-stone-400 rounded-xl hover:border-stone-900 transition-colors">기흥점</button>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-stone-400 font-bold mb-3 block uppercase tracking-widest">픽업 일시</label>
            <input type="datetime-local" className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900 bg-transparent" />
          </div>
          <div>
            <label className="text-[10px] text-stone-400 font-bold mb-3 block uppercase tracking-widest">예약 메뉴</label>
            <select className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900 bg-transparent">
              <option>명장 사워도우 (추천)</option>
              <option>트러플 소금빵</option>
              <option>헤리티지 깜빠뉴</option>
              <option>밤 식빵</option>
            </select>
          </div>
          <button 
            onClick={() => { alert('예약 신청이 성공적으로 완료되었습니다. 매장에서 뵙겠습니다!'); onClose(); }}
            className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-lg mt-6"
          >
            예약 완료하기
          </button>
        </div>
        <button onClick={onClose} className="absolute top-8 right-8 text-stone-300 hover:text-stone-900 transition-colors text-2xl">✕</button>
      </div>
    </div>
  );
};
