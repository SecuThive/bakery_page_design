import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBakery } from '../context/BakeryContext';
import { Reveal } from '../components/Reveal';

export default function HistoryPage() {
  const navigate = useNavigate();
  const { pageInfo } = useBakery();
  const [isReserveOpen, setIsReserveOpen] = useState(false);

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
                  <span className="text-yellow-700 text-xs font-bold tracking-[0.3em] uppercase">명장의 이야기</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {pageInfo.masterStory.title}<br/>그리고 정성
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
                  {pageInfo.masterStory.subtitle}
                  <br/>
                  <span className="text-gray-700 font-semibold">한 덩이의 빵에 담긴 40년의 철학을 만나보세요.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 명장 소개 영상 섹션 */}
      <section className="py-24 lg:py-40 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal delay={100} className="mb-24">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src={pageInfo.masterStory.image}
                alt="Master Baker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-12 text-white">
                  <h3 className="text-4xl font-bold mb-2">제과명장 김뜨락</h3>
                  <p className="text-lg opacity-90">1984년부터 빵의 철학을 실천하는 장인</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 명장 소개 텍스트 */}
          <Reveal delay={200} className="mb-24 bg-gradient-to-br from-yellow-50 to-white p-12 lg:p-16 rounded-3xl border-l-4 border-yellow-700 shadow-lg hover:shadow-xl transition-all">
            <p className="text-2xl font-light text-gray-800 leading-relaxed mb-6 italic">
              "{pageInfo.masterStory.description}"
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pageInfo.masterStory.detail}
            </p>
          </Reveal>

          {/* 타임라인 */}
          <Reveal delay={300} className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">명장의 발자취</h2>
          </Reveal>
        </div>
      </section>
      {/* 타임라인 */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-white to-gray-50 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative space-y-24 mb-24">
            {[
              { 
                y: "1984", 
                t: "인천 동인천 본점 개업", 
                d: "제물포 뒷골목에서 화덕 하나로 시작. 인천 최초로 천연 발효 공법을 도입하여 큰 반향을 일으켰습니다. 처음에는 마을의 아이들과 할머니들이 가장 먼저 찾아왔던 작은 빵집이었습니다.",
                img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                y: "1995", 
                t: "프랑스 르 꼬르동 블루 연수", 
                d: "본토 프랑스 정통 베이킹을 전수받아 한국인에게 가장 알맞은 사워도우 레시피를 완성했습니다. 유럽의 장인 정신과 한국의 감성이 만나는 순간이었습니다.",
                img: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                y: "2018", 
                t: "대한민국 제과명장 선정", 
                d: "40년 가까운 세월 동안 제빵 분야에 기여한 공로로 국가 공인 명장 훈장을 수여받았습니다. 이것은 명장의 여정에서 가장 영광스러운 순간이 되었습니다.",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200"
              },
              { 
                y: "2026", 
                t: "빵뜨락 브랜드 통합 런칭", 
                d: "인천과 용인을 잇는 명장의 정원, '빵뜨락'이라는 이름으로 새롭게 도약합니다. 더 많은 고객들과 명장의 철학을 나누기 위한 새로운 시작입니다.",
                img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200"
              }
            ].map((h, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -left-16 top-0 text-yellow-700 opacity-20 text-9xl font-bold">{h.y}</div>
                      <div className="relative z-10">
                        <span className="text-yellow-700 font-bold text-sm tracking-[0.3em] uppercase block mb-4">연도</span>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">{h.t}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{h.d}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img src={h.img} alt={h.t} className="w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 명장의 가치관 */}
        <Reveal delay={400} className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">명장이 지키는 것들</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "정직함",
                desc: "최고의 재료만 사용하고, 정해진 시간을 절대 단축하지 않습니다.",
                icon: "🎯"
              },
              {
                title: "전통",
                desc: "프랑스의 정통 기법을 지키면서 한국인의 입맛에 맞춰갑니다.",
                icon: "🏛️"
              },
              {
                title: "신선함",
                desc: "매일 새벽에 구우며, 당일 판매하는 것이 명장의 원칙입니다.",
                icon: "✨"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="bg-gray-50 p-10 rounded-3xl text-center hover:bg-yellow-50 transition-all duration-300 border border-gray-200">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-700 font-light text-lg">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="text-center bg-gradient-to-r from-yellow-700 to-yellow-800 text-white p-16 rounded-3xl">
          <h3 className="text-4xl font-bold mb-8">명장의 빵을 경험하세요</h3>
          <p className="text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
            40년의 정성과 72시간의 기다림으로 완성된 명장의 빵은 단순한 음식이 아닌, 일상 속의 따뜻한 위로입니다.
          </p>
          <button 
            onClick={() => navigate('/menu')}
            className="px-10 py-4 bg-white text-yellow-700 font-bold text-lg rounded-full hover:bg-gray-100 transition-all inline-flex items-center gap-3"
          >
            프리미엄 메뉴 보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Reveal>
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
