import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBakery } from '../context/BakeryContext';
import { Reveal } from '../components/Reveal';

export default function Home() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigate = useNavigate();
  const { menus, pageInfo } = useBakery();

  return (
    <div className="bg-white text-gray-900 font-serif selection:bg-yellow-100 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 좌측: 텍스트 */}
            <Reveal>
              <div>
                <div className="mb-8">
                  <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-4">빵뜨락 명장 아틀리에</span>
                  <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-gray-900">
                    빵의<br/>진정성
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-700 mb-8">
                    인천의 빵 문화를 선도하는 명장의 손길
                  </h2>
                </div>
                
                <p className="text-gray-600 font-light text-lg mb-12 max-w-xl leading-relaxed">
                  72시간의 저온 발효로 완성되는 깊이 있는 풍미<br/>
                  천연 발효종으로 만드는 건강한 빵<br/>
                  매일 새벽 화덕에서 구워지는 신선함의 약속
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/menu')}
                    className="group px-10 py-3 border-2 border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
                  >
                    컬렉션 보기
                  </button>
                  <button 
                    onClick={() => setIsReserveOpen(true)}
                    className="group px-10 py-3 border-2 border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
                  >
                    예약하기
                  </button>
                </div>
              </div>
            </Reveal>

            {/* 우측: 이미지 */}
            <Reveal delay={200}>
              <div className="relative h-96 lg:h-full min-h-96">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url("${pageInfo.homeHeroImage}")`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. 마스터 스토리 섹션 */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-white to-gray-50 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 좌측: 이미지 */}
            <Reveal>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
                    alt="Master Baker" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* 우측: 텍스트 */}
            <Reveal delay={200}>
              <div>
                <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-6">명장의 이야기</span>
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  40년의<br/>정성
                </h2>
                
                <p className="text-gray-700 font-light text-lg leading-relaxed mb-8">
                  대한민국 제과명장으로서 40여 년을 한길로 걸어온 마스터.
                  프랑스의 정통 기법을 배우고, 한국의 감성을 담아낸 명장의 손길에서 탄생한 빵들은
                  더 이상 단순한 음식이 아닙니다.
                </p>
                
                <p className="text-gray-600 font-light text-base leading-relaxed mb-12">
                  매일 아침 새벽 3시, 화덕에서 시작되는 일상.
                  72시간의 정성과 건강한 재료의 조화로 완성된 빵 한 덩이는
                  누군가의 하루를 밝히는 따뜻한 위로가 됩니다.
                </p>
                
                <button 
                  onClick={() => navigate('/history')}
                  className="px-8 py-3 border border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
                >
                  더 알아보기
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. 핵심 가치 섹션 */}
      <section className="py-24 lg:py-32 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <p className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase mb-6">프리미엄 빵의 조건</p>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900">
              명장이 지키는<br/>네 가지 원칙
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "72시간 저온 발효", desc: "천천히 숙성되어 완성되는 깊이 있는 풍미" },
              { title: "천연 발효종", desc: "12가지 천연 발효종으로 만드는 빵의 생명" },
              { title: "프리미엄 버터", desc: "프랑스 노르망디 지역의 고급 버터 사용" },
              { title: "당일 생산", desc: "매일 새벽 화덕에서 구워지는 신선함" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group text-center p-8 border border-gray-300 hover:border-yellow-400 transition-all rounded-lg bg-gradient-to-b from-gray-50 to-white">
                  <h4 className="text-lg font-semibold text-gray-900 tracking-wide mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 컬렉션 섹션 */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-gray-50 to-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* 헤더 */}
          <Reveal className="text-center mb-20">
            <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-6">시그니처 컬렉션</span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              명장이 엄선한 빵
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              프리미엄 재료와 정통 기법이 만나는 특별한 빵들
            </p>
          </Reveal>

          {/* 메뉴 카드 그리드 */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {menus.slice(0, 3).map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-6 shadow-md" onClick={() => setSelectedMenu(item)}>
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-90 transition-opacity"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {item.badge && <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-600 text-white text-xs font-bold uppercase rounded">{item.badge}</div>}
                  </div>
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h5>
                  <p className="text-gray-600 text-sm font-light mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-700 font-semibold text-lg">₩{item.price.toLocaleString()}</span>
                    <button 
                      onClick={() => setSelectedMenu(item)}
                      className="text-xs font-semibold text-yellow-700 hover:text-yellow-800 border-b border-yellow-600/50 pb-1 transition-colors"
                    >
                      상세보기
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA 버튼 */}
          <Reveal className="text-center">
            <button 
              onClick={() => navigate('/menu')}
              className="px-10 py-3 border border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
            >
              전체 컬렉션 보기
            </button>
          </Reveal>
        </div>
      </section>

      {/* 5. 베이킹 프로세스 */}
      <section className="py-24 lg:py-40 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-6">베이킹 일정</span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900">
              매일의 빵 스케줄
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "09:00", i: "식빵 & 건강 베이커리" },
              { t: "11:30", i: "프랑스 크로와상" },
              { t: "14:00", i: "프리미엄 발효빵" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="text-center p-8 border border-gray-300 hover:border-yellow-400 transition-all rounded-lg bg-gradient-to-b from-gray-50 to-white">
                  <div className="text-4xl font-light text-yellow-700 mb-4 font-serif">{item.t}</div>
                  <p className="text-sm text-gray-700 font-light">{item.i}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <button 
              onClick={() => navigate('/schedule')}
              className="px-10 py-3 border border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
            >
              전체 일정 보기
            </button>
          </Reveal>
        </div>
      </section>

      {/* 6. 고객 후기 섹션 */}
      <section className="py-24 lg:py-40 bg-white border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-6">고객의 목소리</span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              명장의 빵을<br/>경험한 분들
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              매일 아침 화덕에서 구워지는 신선함과 정성이 담긴 빵을 경험한 고객들의 후기입니다
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pageInfo.reviews.map((review, idx) => (
              <Reveal key={review.id} delay={idx * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-500">
                  {/* 별점 */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* 후기 내용 */}
                  <p className="text-gray-700 font-light text-lg mb-6 leading-relaxed">
                    "{review.content}"
                  </p>

                  {/* 고객 정보 */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-stone-800 font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">고객</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <Reveal className="text-center mt-16">
            <button 
              onClick={() => navigate('/history')}
              className="px-10 py-3 border border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all"
            >
              모든 후기 보기
            </button>
          </Reveal>
        </div>
      </section>

      {/* 7. 예약 CTA 섹션 */}
      <section className="py-32 lg:py-40 bg-gradient-to-r from-yellow-50 to-white border-t border-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase block mb-8">명장의 특별한 경험</span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              오늘의 빵을 미리 예약하세요
            </h2>
            <p className="text-gray-700 font-light text-lg mb-12 max-w-2xl mx-auto">
              신선한 빵을 언제든 만날 수 있도록 온라인 예약 서비스를 제공합니다
            </p>
            <button 
              onClick={() => setIsReserveOpen(true)}
              className="px-12 py-3 border border-yellow-600 text-yellow-700 font-light tracking-wide hover:bg-yellow-50 transition-all text-lg"
            >
              예약하기
            </button>
          </Reveal>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white text-gray-700 py-20 px-6 lg:px-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-300">
            <div>
              <h3 className="text-gray-900 font-serif font-semibold text-lg mb-4">빵뜨락</h3>
              <p className="text-xs font-light leading-relaxed text-gray-600">명장 아틀리에<br/>인천의 프리미엄 베이커리</p>
            </div>
            <div>
              <h6 className="text-gray-900 font-semibold uppercase text-xs tracking-widest mb-4">매장</h6>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <p>인천점: 031-123-4567</p>
                <p>기흥점: 031-987-6543</p>
              </div>
            </div>
            <div>
              <h6 className="text-gray-900 font-semibold uppercase text-xs tracking-widest mb-4">영업시간</h6>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <p>09:00 - 20:00</p>
                <p className="text-yellow-700 font-semibold">월요일 휴무</p>
              </div>
            </div>
            <div>
              <h6 className="text-gray-900 font-semibold uppercase text-sm tracking-widest mb-6">연락처</h6>
              <div className="space-y-2 text-xs font-light text-gray-600">
                <p>전화: 031-123-4567</p>
                <p>이메일: info@bakery-drak.com</p>
                <p>인스타그램: @bakery_drak</p>
              </div>
            </div>
          </div>
          <div className="text-center text-xs uppercase tracking-widest text-gray-500">
            © 2026 Bakery-Drak. 장인의 정성과 전통. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 온라인 예약 모달 */}
      {isReserveOpen && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsReserveOpen(false)}></div>
          <div className="relative z-10 bg-white w-full max-w-md rounded-xl p-10 shadow-2xl">
            <div className="absolute top-5 right-5">
              <button onClick={() => setIsReserveOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl font-light">✕</button>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">온라인 예약</h3>
            <p className="text-center text-gray-600 font-light mb-8 text-sm">명장의 빵을 미리 예약하세요</p>
            
            <div className="space-y-5">
              <div>
                <label className="text-xs text-gray-700 font-semibold mb-3 block uppercase tracking-widest">방문 지점</label>
                <div className="grid grid-cols-2 gap-3">
                   <button className="py-3 border-2 border-yellow-600 bg-yellow-600 text-white rounded-lg font-light hover:bg-yellow-700 transition-all">인천 본점</button>
                   <button className="py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-light hover:border-gray-400 transition-all">기흥점</button>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-700 font-semibold mb-3 block uppercase tracking-widest">방문 날짜 & 시간</label>
                <input type="datetime-local" className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-700 text-sm" />
              </div>
              <div>
                <label className="text-xs text-gray-700 font-semibold mb-3 block uppercase tracking-widest">선택 메뉴</label>
                <select className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-700 text-sm">
                  <option>인천 사워도우</option>
                  <option>트러플 소금빵</option>
                  <option>헤리티지 깜빠뉴</option>
                </select>
              </div>
              <button 
                onClick={() => { alert('예약이 완료되었습니다!'); setIsReserveOpen(false); }}
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-yellow-700 transition-all"
              >
                예약 완료
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 상세보기 모달 */}
      {selectedMenu && (
        <div className="fixed inset-0 z-[102] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedMenu(null)}></div>
          <div className="relative z-10 bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedMenu(null)}
              className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* 좌측: 이미지 영역 */}
              <div className="relative h-96 md:h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center p-8">
                <div className="text-9xl animate-bounce mb-8">🥐</div>
                <div className="text-center">
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 font-semibold">고객 만족도 4.9/5.0</p>
                  <p className="text-gray-500 text-sm">(342개 리뷰)</p>
                </div>
              </div>

              {/* 우측: 정보 영역 */}
              <div className="p-8 md:p-12 flex flex-col">
                {/* 헤더 정보 */}
                <div className="mb-8">
                  {/* 뱃지 */}
                  <div className="mb-4 flex gap-2">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-700">
                      시그니처
                    </span>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-100 text-green-700">
                      ✓ 인기 상품
                    </span>
                  </div>

                  {/* 제목 및 설명 */}
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {selectedMenu.name || selectedMenu.n}
                  </h2>
                  <p className="text-gray-600 font-light text-lg leading-relaxed">
                    {selectedMenu.description || selectedMenu.d}
                  </p>
                </div>

                {/* 가격 정보 */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-yellow-700">₩{typeof selectedMenu.price === 'string' ? selectedMenu.price : selectedMenu.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-lg">₩{typeof selectedMenu.price === 'string' ? parseInt(selectedMenu.price) + 2000 : selectedMenu.price + 2000}</span>
                    <span className="text-red-600 font-bold text-lg">10% 할인</span>
                  </div>
                  <p className="text-gray-600 font-light text-sm mt-2">당일 구매 시 추가 할인 혜택!</p>
                </div>

                {/* 상세 정보 */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">주요 특징</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-600">⏱️</span>
                        <span className="text-gray-700 font-light">72시간 저온발효로 깊은 맛</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-600">🌾</span>
                        <span className="text-gray-700 font-light">천연 발효종으로 건강하게</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-600">✨</span>
                        <span className="text-gray-700 font-light">매일 새벽에 정성으로 구움</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">영양정보 (100g 기준)</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 font-light">칼로리</p>
                        <p className="text-gray-900 font-semibold">265 kcal</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-light">단백질</p>
                        <p className="text-gray-900 font-semibold">9.2g</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-light">탄수화물</p>
                        <p className="text-gray-900 font-semibold">48.5g</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-light">지방</p>
                        <p className="text-gray-900 font-semibold">3.8g</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">보관 방법</h3>
                    <p className="text-gray-700 font-light">실온(15~20℃)에서 2-3일 보관 가능합니다. 냉동실에 보관하면 1개월까지 보관 가능하며, 섭취 전 실온에서 1시간 해동해주세요.</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">추천 조합</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">따뜻한 커피</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">버터</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">잼</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">치즈</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">알레르기 정보</h3>
                    <p className="text-gray-700 font-light text-sm">
                      함유: <span className="font-semibold">밀, 계란, 우유, 버터</span><br/>
                      시설: <span className="font-semibold">견과류 포함 시설에서 생산</span>
                    </p>
                  </div>
                </div>

                {/* 하단: 액션 버튼 */}
                <div className="flex gap-3 mt-auto pt-8 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setIsReserveOpen(true);
                      setSelectedMenu(null);
                    }}
                    className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    지금 예약하기
                  </button>
                  <button 
                    onClick={() => setSelectedMenu(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:border-gray-400 transition-all"
                  >
                    계속 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
