import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBakery } from '../context/BakeryContext';
import { Reveal } from '../components/Reveal';

export default function MenuPage() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigate = useNavigate();
  const { menus } = useBakery();

  // Context에서 받은 메뉴를 카테고리별로 그룹화
  const menuCategories = menus.length > 0 
    ? [...new Map(menus.map(item => [item.category, item.category])).keys()].map(category => ({
        category,
        description: `${category}의 특별한 빵들`,
        items: menus.filter(item => item.category === category).map(m => ({
          n: m.name,
          p: typeof m.price === 'number' ? m.price.toString() : m.price,
          d: m.description,
          badge: m.badge || 'New'
        }))
      }))
    : [];

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
                      {/* 상단 이미지 영역 - 실제 이미지 표시 */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center group-hover:from-gray-100 transition-all duration-500">
                        {/* 배경 패턴 */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30"></div>
                        </div>

                        {/* 메뉴 이미지 URL */}
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.n}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<div className="text-8xl">🍞</div>';
                            }}
                          />
                        ) : (
                          <div className="relative text-8xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            🍞
                          </div>
                        )}

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
                              onClick={() => setSelectedMenu(item)} 
                              className="px-4 py-2 text-sm font-bold text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                            >
                              상세보기
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
                      {selectedMenu.badge}
                    </span>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-100 text-green-700">
                      ✓ 인기 상품
                    </span>
                  </div>

                  {/* 제목 및 설명 */}
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {selectedMenu.n}
                  </h2>
                  <p className="text-gray-600 font-light text-lg leading-relaxed">
                    {selectedMenu.d}
                  </p>
                </div>

                {/* 가격 정보 */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-yellow-700">₩{selectedMenu.p}</span>
                    <span className="text-gray-500 line-through text-lg">₩{parseInt(selectedMenu.p) + 2000}</span>
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
