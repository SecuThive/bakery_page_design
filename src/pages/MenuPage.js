import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export default function MenuPage() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const navigate = useNavigate();

  const menuCategories = [
    {
      category: "시그니처 컬렉션",
      description: "명장의 오랜 연구 끝에 탄생한 빵뜨락의 대표 메뉴",
      items: [
        { n: "인천 사워도우", p: "12,000", d: "72시간 저온 발효로 완성된 풍미", badge: "Best" },
        { n: "트러플 소금빵", p: "5,500", d: "프랑스산 고메버터와 트러플의 만남", badge: "New" },
        { n: "헤리티지 깜빠뉴", p: "9,000", d: "견과류의 고소함과 통밀의 건강함", badge: "Best" }
      ]
    },
    {
      category: "프레시 베이커리",
      description: "매일 아침 구워내는 신선한 빵들",
      items: [
        { n: "우유 식빵", p: "6,500", d: "진한 우유향의 담백한 맛", badge: "Daily" },
        { n: "통곡물 식빵", p: "8,000", d: "건강함을 담은 고소한 식빵", badge: "Healthy" },
        { n: "밤 식빵", p: "8,500", d: "고소한 밤향이 가득한 특별한 식빵", badge: "Seasonal" }
      ]
    },
    {
      category: "프랑스 페이스트리",
      description: "프랑스 전통의 정통 베이커리",
      items: [
        { n: "크로와상", p: "4,500", d: "바삭한 결이 살아있는 프랑스식 크로와상", badge: "Classic" },
        { n: "초콜릿 크로와상", p: "5,000", d: "진한 벨기에산 초콜릿을 가득 담다", badge: "Popular" },
        { n: "아몬드 크로와상", p: "5,500", d: "고소한 아몬드 크림과 아몬드슬라이스", badge: "Classic" }
      ]
    },
    {
      category: "건강 베이커리",
      description: "건강한 재료로 만든 웰빙 빵",
      items: [
        { n: "잡곡빵", p: "7,000", d: "12가지 곡물의 조화로운 맛과 영양", badge: "Healthy" },
        { n: "호밀빵", p: "8,500", d: "소화에 좋은 유럽식 호밀빵", badge: "New" },
        { n: "치즈 통곡물", p: "9,000", d: "체다 치즈와 통곡물의 건강한 조합", badge: "Popular" }
      ]
    }
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
              {/* 배경 데코레이션 */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-50 rounded-full opacity-30 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-700 to-yellow-500"></div>
                  <span className="text-yellow-700 text-xs font-bold tracking-[0.3em] uppercase">프리미엄 컬렉션</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  명장의<br/>정선된 빵
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
                  40년의 경험과 철학이 담긴 프리미엄 메뉴.
                  <br/>
                  <span className="text-gray-700 font-semibold">매 순간을 특별하게 만드는 빵뜨락의 자부심입니다.</span>
                </p>
                
                {/* 특징 강조 */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
                  <div className="flex flex-col items-start">
                    <div className="text-3xl mb-3">⏱️</div>
                    <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">72시간</span> 저온발효</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-3xl mb-3">🌾</div>
                    <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">천연</span> 발효종</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-3xl mb-3">✨</div>
                    <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">당일</span> 생산</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="py-24 lg:py-40 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {menuCategories.map((section, sectionIdx) => (
          <section key={sectionIdx} className="mb-40">
            <Reveal delay={sectionIdx * 50}>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-yellow-700 to-yellow-400"></div>
                  <span className="text-yellow-700 text-xs font-bold tracking-[0.4em] uppercase">컬렉션</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{section.category}</h2>
                <p className="text-gray-600 font-light text-lg max-w-2xl">{section.description}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <Reveal key={idx} delay={sectionIdx * 50 + idx * 100}>
                  <div className="group relative h-full">
                    {/* 배경 호버 효과 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                    
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-yellow-300/50 h-full flex flex-col">
                      {/* 상단 이미지 영역 - 더 세련된 디자인 */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center group-hover:from-gray-100 transition-all duration-500">
                        {/* 배경 패턴 - 고급스러운 느낌 */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30"></div>
                        </div>

                        {/* 메뉴 이미지 - 더 큰 이모지 */}
                        <div className="relative text-8xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          🥐
                        </div>

                        {/* 뱃지 - 더 우아한 디자인 */}
                        <div className="absolute top-6 right-6">
                          <div className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                            item.badge === 'Best' ? 'bg-red-600/80 text-white' :
                            item.badge === 'New' ? 'bg-green-600/80 text-white' :
                            item.badge === 'Popular' ? 'bg-blue-600/80 text-white' :
                            'bg-yellow-600/80 text-white'
                          }`}>
                            {item.badge}
                          </div>
                        </div>
                      </div>

                      {/* 하단 컨텐츠 영역 */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* 메뉴 이름 */}
                        <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                          {item.n}
                        </h5>

                        {/* 설명 - 더 우아한 폰트 */}
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed font-light flex-grow">
                          {item.d}
                        </p>

                        {/* 가격 및 액션 구간 */}
                        <div className="pt-6 border-t border-gray-200 group-hover:border-yellow-200 transition-colors">
                          <div className="flex justify-between items-end">
                            <div>
                              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">가격</span>
                              <span className="text-2xl font-bold text-yellow-700 group-hover:text-yellow-800 transition-colors">
                                {item.p}
                              </span>
                              <span className="text-gray-500 ml-1">원</span>
                            </div>
                            <button 
                              onClick={() => setIsReserveOpen(true)} 
                              className="px-4 py-2 text-sm font-bold text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                            >
                              예약
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <Reveal className="bg-gradient-to-r from-yellow-700 to-yellow-800 text-white p-16 rounded-3xl text-center mt-20">
          <h3 className="text-4xl font-bold mb-8">특별한 요청 환영합니다</h3>
          <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
            커스텀 주문, 기업 행사, 웨딩 케이크 등 특별한 날을 위해 명장이 직접 준비합니다.
          </p>
          <a href="tel:031-123-4567" className="inline-block bg-white text-yellow-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">031-123-4567</a>
        </Reveal>
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
                  <option>우유 식빵</option>
                  <option>크로와상</option>
                </select>
              </div>
              <button 
                onClick={() => { alert('예약이 완료되었습니다!'); setIsReserveOpen(false); }}
                className="w-full bg-yellow-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-800 transition-all mt-8"
              >
                예약 완료하기
              </button>
            </div>
            <button onClick={() => setIsReserveOpen(false)} className="absolute top-8 right-8 text-stone-300 hover:text-stone-900 transition-colors text-2xl">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
