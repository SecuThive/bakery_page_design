import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export default function SchedulePage() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const navigate = useNavigate();

  const scheduleData = [
    { t: "09:00", i: "식빵 및 건강 식사빵", d: "우유 식빵, 잡곡빵, 밤식빵 등 담백한 아침을 위한 빵", emoji: "🍞" },
    { t: "11:30", i: "크로와상 및 페이스트리", d: "바삭한 결이 살아있는 명장의 프랑스 정통 베이커리", emoji: "🥐" },
    { t: "14:00", i: "바게트, 사워도우, 깜빠뉴", d: "72시간 저온 발효를 마친 건강한 식사 대용 빵", emoji: "🥖" }
  ];

  return (
    <div className="bg-white text-gray-900 font-serif selection:bg-yellow-100 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="text-yellow-700 text-sm font-bold mb-8 hover:text-yellow-800 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            돌아가기
          </button>
          
          <Reveal>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-50 rounded-full opacity-30 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-700 to-yellow-500"></div>
                  <span className="text-yellow-700 text-xs font-bold tracking-[0.3em] uppercase">베이킹 타임라인</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  명장의 하루<br/>빵 만드는 시간
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
                  매일 새벽부터 시작되는 신선한 빵의 탄생 과정.
                  <br/>
                  <span className="text-gray-700 font-semibold">정확한 시간에 완성되는 명장의 빵을 만나보세요.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 메인 타임라인 */}
      <section className="py-24 lg:py-40 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal delay={100} className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">매일의 리듬</h2>
            <p className="text-gray-600 font-light text-lg max-w-2xl">정해진 시간에 따뜨하고 신선한 명장의 빵이 탄생합니다</p>
          </Reveal>

          <div className="space-y-8">
            {scheduleData.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative">
                  <div className="absolute left-0 top-1/2 w-16 h-16 bg-yellow-100 rounded-full transform -translate-y-1/2 -translate-x-8 group-hover:bg-yellow-200 transition-all"></div>
                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 group-hover:border-yellow-400">
                    <div className="grid md:grid-cols-4 gap-8 items-center">
                      <div className="flex flex-col md:col-span-1">
                        <span className="text-xs text-yellow-700 font-bold tracking-[0.3em] uppercase block mb-3">시간</span>
                        <span className="text-5xl font-bold text-gray-900">{item.t}</span>
                      </div>
                      <div className="md:col-span-3 flex items-start gap-6">
                        <span className="text-6xl">{item.emoji}</span>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.i}</h4>
                          <p className="text-gray-600 font-light text-lg leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 주간 운영 정보 */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-gray-50 to-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal delay={300} className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">운영 정보</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-700 to-yellow-500"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={350}>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-10 lg:p-12 rounded-3xl border-2 border-yellow-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-3xl">📍</span> 인천 본점
                </h3>
                <div className="space-y-5 text-base font-light text-gray-700">
                  <p><span className="font-bold text-gray-900 block mb-1">주소</span>인천광역시 중구 어느 골목길 123</p>
                  <p><span className="font-bold text-gray-900 block mb-1">전화</span>031-123-4567</p>
                  <p><span className="font-bold text-gray-900 block mb-1">운영시간</span>AM 09:00 - PM 20:00</p>
                  <p><span className="font-bold text-gray-900 block mb-1">휴무</span><span className="text-yellow-700 font-bold">매주 월요일</span></p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-10 lg:p-12 rounded-3xl border-2 border-yellow-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-3xl">📍</span> 기흥점
                </h3>
                <div className="space-y-5 text-base font-light text-gray-700">
                  <p><span className="font-bold text-gray-900 block mb-1">주소</span>경기도 용인시 기흥구 베이커리 가든 1</p>
                  <p><span className="font-bold text-gray-900 block mb-1">전화</span>031-987-6543</p>
                  <p><span className="font-bold text-gray-900 block mb-1">운영시간</span>AM 10:00 - PM 21:00</p>
                  <p><span className="font-bold text-gray-900 block mb-1">휴무</span><span className="text-yellow-700 font-bold">매주 월요일</span></p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 특별 공지 */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-gray-50 to-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal delay={450} className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-white p-12 md:p-16 rounded-3xl border-l-4 border-yellow-700 mb-20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📢</span> 중요한 안내사항
              </h3>
              <ul className="space-y-4 text-gray-700 font-light text-lg">
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span>주말에는 더 많은 빵이 준비되므로 여유 있게 방문하세요.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span>단체 주문 및 특별 주문은 2-3일 전에 미리 연락주세요.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span>시간표의 시간은 빵의 완성 시간이므로 참고하시기 바랍니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span>모든 빵은 매일 새로 만들어지며 당일 판매합니다.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span>SNS에서 실시간 상태를 확인할 수 있습니다: @bakery_drak</span>
                </li>
              </ul>
            </Reveal>

            {/* 온라인 예약 CTA */}
            <div className="text-center">
              <Reveal>
                <h3 className="text-4xl font-bold text-gray-900 mb-8">명장의 빵을 미리 예약하세요</h3>
                <button 
                  onClick={() => setIsReserveOpen(true)}
                  className="px-10 py-4 bg-yellow-700 text-white font-bold text-lg rounded-full hover:bg-yellow-800 transition-all inline-flex items-center gap-3 shadow-lg"
                >
                  온라인 예약하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Reveal>
            </div>
        </div>
      </section>

      {/* 온라인 예약 모달 */}
      {isReserveOpen && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsReserveOpen(false)}></div>
          <div className="relative z-10 bg-white w-full max-w-md rounded-3xl p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute top-6 right-6">
              <button onClick={() => setIsReserveOpen(false)} className="text-gray-400 hover:text-gray-600 text-3xl">✕</button>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">온라인 예약</h3>
            <p className="text-center text-gray-600 font-light mb-10">명장의 빵을 미리 예약하세요</p>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs text-gray-600 font-bold mb-3 block uppercase tracking-widest">방문 지점</label>
                <div className="grid grid-cols-2 gap-3">
                   <button className="py-3 border-2 border-yellow-700 bg-yellow-700 text-white rounded-lg font-semibold">인천 본점</button>
                   <button className="py-3 border-2 border-gray-300 text-gray-400 rounded-lg font-semibold hover:border-gray-400">기흥점</button>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-bold mb-3 block uppercase tracking-widest">방문 날짜 & 시간</label>
                <input type="datetime-local" className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:border-yellow-700" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-bold mb-3 block uppercase tracking-widest">선택 메뉴</label>
                <select className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:border-yellow-700">
                  <option>인천 사워도우</option>
                  <option>트러플 소금빵</option>
                  <option>헤리티지 깜빠뉴</option>
                </select>
              </div>
              <button 
                onClick={() => { alert('예약이 완료되었습니다!'); setIsReserveOpen(false); }}
                className="w-full bg-yellow-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-800 transition-all mt-8"
              >
                예약 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
