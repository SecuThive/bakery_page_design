import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export default function Home() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 font-serif selection:bg-yellow-100 overflow-x-hidden">
      {/* 1. HERO SECTION - 프리미엄 스타일 */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <Reveal>
            <div className="mb-6">
              <span className="text-yellow-300 text-sm font-bold tracking-[0.3em] uppercase">대한민국 제과명장</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              인천 명장의<br/>빵 정원
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-xl lg:text-2xl text-gray-100 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              1984년부터 이어온 전통과 혁신의 만남<br/>
              72시간의 정성으로 완성된 명장의 빵
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/history')}
                className="px-8 py-4 bg-yellow-600 text-white font-bold text-lg rounded-full hover:bg-yellow-700 transition-all shadow-2xl"
              >
                명장의 철학 보기
              </button>
              <button 
                onClick={() => setIsReserveOpen(true)}
                className="px-8 py-4 bg-white/20 text-white font-bold text-lg rounded-full backdrop-blur-md hover:bg-white/30 transition-all border border-white/50"
              >
                온라인 예약
              </button>
            </div>
          </Reveal>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce text-white text-sm flex flex-col items-center gap-2">
            <span>아래로 스크롤</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. 명장 소개 섹션 */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="mb-8">
                  <span className="text-yellow-700 text-sm font-bold tracking-[0.3em] uppercase block mb-3">인천의 자부심</span>
                  <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    명장 김뜨락의<br/>빵 철학
                  </h2>
                </div>
                <div className="w-16 h-1 bg-yellow-600 mb-8"></div>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  40여 년을 한길로 걸어온 대한민국 제과명장. 프랑스의 정통을 배우고, 한국의 정서를 담아낸 명장의 손길에서 탄생한 빵들은 더 이상 단순한 음식이 아닙니다.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                  매일 아침 새벽 3시, 인천 본점의 화덕에서 시작되는 명장의 일상. 그곳에서 72시간의 정성과 건강한 재료의 조화로 완성된 빵 한 덩이는 누군가의 하루를 밝히는 따뜻한 위로가 됩니다.
                </p>
                <button 
                  onClick={() => navigate('/history')}
                  className="text-yellow-700 font-bold flex items-center gap-2 hover:gap-4 transition-all group"
                >
                  전체 이야기 보기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
                    alt="Master Baker" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-yellow-100 rounded-2xl -z-10"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. 핵심 가치 */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-yellow-700 text-sm font-bold tracking-[0.3em] uppercase block mb-4">명장의 가치</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              가장 정직한 빵을 위해
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto"></div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🕐",
                title: "72시간의 기다림",
                desc: "저온 숙성으로 완성되는 진정한 풍미"
              },
              {
                icon: "🌾",
                title: "천연 발효",
                desc: "12가지 천연 발효종으로 만드는 건강함"
              },
              {
                icon: "✨",
                title: "당일 생산",
                desc: "매일 새벽 구워지는 신선함의 약속"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-all duration-300 text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-light text-lg">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 프리미엄 메뉴 프리뷰 */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* 헤더 */}
          <Reveal className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
              <span className="text-yellow-400 text-xs font-bold tracking-[0.4em] uppercase">명장의 정선</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              프리미엄<br/>컬렉션
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl">
              명장이 정성껏 선별한 시그니처 메뉴들.
              <br/>
              <span className="text-gray-100">각각은 그 자체로 하나의 작품입니다.</span>
            </p>
          </Reveal>

          {/* 프리미엄 메뉴 카드 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                n: "인천 사워도우", 
                p: "12,000원", 
                d: "72시간 저온 발효로 완성된 깊이 있는 풍미와 진정한 프리미엄의 정의",
                emoji: "🍞",
                badge: "시그니처"
              },
              { 
                n: "트러플 소금빵", 
                p: "5,500원", 
                d: "프랑스산 고메 버터와 귀한 트러플이 만든 럭셔리한 경험",
                emoji: "✨",
                badge: "프리미엄"
              },
              { 
                n: "헤리티지 깜빠뉴", 
                p: "9,000원", 
                d: "견과류의 고소함과 통밀의 건강함으로 완성한 명장의 대표작",
                emoji: "🌰",
                badge: "시그니처"
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative h-full">
                  {/* 배경 호버 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-yellow-300/50 h-full flex flex-col">
                    {/* 상단 이미지 영역 - 밝고 세련된 톤 */}
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center group-hover:from-gray-100 transition-all duration-500">
                      {/* 배경 패턴 - 고급스러운 느낌 */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30"></div>
                      </div>

                      {/* 메뉴 이미지 - 더 큰 이모지 */}
                      <div className="relative text-8xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {item.emoji}
                      </div>

                      {/* 뱃지 - 더 우아한 디자인 */}
                      <div className="absolute top-6 right-6">
                        <div className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-yellow-600/80 text-white">
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
                              {item.p.replace('원', '')}
                            </span>
                            <span className="text-gray-500">원</span>
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

          {/* CTA 버튼 */}
          <Reveal className="text-center">
            <button 
              onClick={() => navigate('/menu')}
              className="group relative px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-yellow-600/50 transition-all hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                전체 메뉴 보기
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* 5. 베이킹 시간표 미리보기 */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-yellow-700 text-sm font-bold tracking-[0.3em] uppercase block mb-4">매일의 리듬</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              베이킹 타임라인
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto"></div>
          </Reveal>

          <div className="space-y-8 mb-12">
            {[
              { t: "09:00", i: "식빵 & 건강 베이커리", emoji: "🥖" },
              { t: "11:30", i: "프랑스 크로와상", emoji: "🥐" },
              { t: "14:00", i: "프리미엄 발효빵", emoji: "🍞" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-all">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-4xl font-bold text-yellow-700">{item.t}</div>
                    <div className="text-2xl mt-2">{item.emoji}</div>
                  </div>
                  <div className="flex-grow border-l-2 border-yellow-200 pl-8">
                    <h4 className="text-2xl font-bold text-gray-900">{item.i}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <button 
              onClick={() => navigate('/schedule')}
              className="text-yellow-700 font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all group mx-auto"
            >
              자세한 시간표 확인
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Reveal>
        </div>
      </section>

      {/* 6. CTA 섹션 */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-yellow-700 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              명장의 빵을 만나보세요
            </h2>
            <p className="text-xl font-light mb-12 opacity-90">
              1984년부터 이어진 전통, 이제 당신의 일상 속으로
            </p>
            <button 
              onClick={() => setIsReserveOpen(true)}
              className="px-12 py-4 bg-white text-yellow-700 font-bold text-xl rounded-full hover:bg-gray-100 transition-all shadow-2xl"
            >
              지금 예약하기
            </button>
          </Reveal>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-gray-800">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">빵뜨락</h3>
              <p className="text-sm leading-loose">대한민국 제과명장 김뜨락의 정성이 담긴 프리미엄 베이커리</p>
            </div>
            <div>
              <h6 className="text-white font-bold uppercase text-sm tracking-widest mb-6">위치</h6>
              <div className="space-y-3 text-sm">
                <p>인천 본점: 중구 어느 골목길 123</p>
                <p>기흥점: 용인시 기흥구 베이커리 가든 1</p>
              </div>
            </div>
            <div>
              <h6 className="text-white font-bold uppercase text-sm tracking-widest mb-6">운영시간</h6>
              <div className="space-y-3 text-sm">
                <p>AM 09:00 - PM 20:00</p>
                <p className="text-yellow-400">매주 월요일 휴무</p>
              </div>
            </div>
            <div>
              <h6 className="text-white font-bold uppercase text-sm tracking-widest mb-6">연락처</h6>
              <div className="space-y-3 text-sm">
                <p>📞 031-123-4567</p>
                <p>📧 info@bakery-drak.com</p>
                <p>📱 @bakery_drak</p>
              </div>
            </div>
          </div>
          <div className="text-center text-xs uppercase tracking-widest text-gray-600">
            © 2026 Bakery-Drak. Artisanal Heritage. All Rights Reserved.
          </div>
        </div>
      </footer>

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
