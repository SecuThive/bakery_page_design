import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBakery } from '../context/BakeryContext';
import Reveal from '../components/Reveal';

export default function AdminPage() {
  const navigate = useNavigate();
  const { adminAuth, loginAdmin, logoutAdmin, menus, addMenu, deleteMenu, updateMenu, reservations, updateReservationStatus, deleteReservation, pageInfo, updateMasterStory, updateHomeHeroImage, updateBakingSchedule, updateContact, addReview, deleteReview, updateReview } = useBakery();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 로그인 처리
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setPassword('');
      setError('');
    } else {
      setError('비밀번호가 틀렸습니다.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  // 메뉴 추가
  const [newMenu, setNewMenu] = useState({
    name: '',
    price: '',
    badge: '',
    category: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1585314317897-fea231b40fef?auto=format&fit=crop&q=80&w=400'
  });

  const handleAddMenu = (e) => {
    e.preventDefault();
    if (newMenu.name && newMenu.price && newMenu.category) {
      addMenu({
        ...newMenu,
        price: parseInt(newMenu.price)
      });
      setNewMenu({
        name: '',
        price: '',
        badge: '',
        category: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1585314317897-fea231b40fef?auto=format&fit=crop&q=80&w=400'
      });
    } else {
      alert('필수 항목을 입력해주세요.');
    }
  };

  // 로그인하지 않았다면 로그인 화면 표시
  if (!adminAuth.isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-gray-50 flex items-center justify-center p-4">
        <Reveal>
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h1 className="text-3xl font-bold text-stone-800">관리자 로그인</h1>
              <p className="text-gray-600 mt-2">베이커리 관리 시스템</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">비밀번호</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="관리자 비밀번호를 입력하세요"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105"
              >
                로그인
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <span className="font-bold">테스트 비밀번호:</span> admin2026
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }

  // 로그인 후 대시보드
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-gray-50 pb-20">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">🏠 베이커리 관리 시스템</h1>
          <button
            onClick={handleLogout}
            className="bg-white text-yellow-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: 'dashboard', label: '📊 대시보드', icon: '📊' },
            { id: 'menu', label: '🍞 메뉴 관리', icon: '🍞' },
            { id: 'reservation', label: '📅 예약 관리', icon: '📅' },
            { id: 'pages', label: '📄 페이지 관리', icon: '📄' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 대시보드 */}
        {activeTab === 'dashboard' && (
          <Reveal>
            <div className="space-y-6">
              {/* 통계 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-600">
                  <div className="text-gray-600 text-sm font-semibold mb-2">🍞 등록된 메뉴</div>
                  <div className="text-4xl font-bold text-yellow-600">{menus.length}</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                  <div className="text-gray-600 text-sm font-semibold mb-2">📅 전체 예약</div>
                  <div className="text-4xl font-bold text-blue-600">{reservations.length}</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
                  <div className="text-gray-600 text-sm font-semibold mb-2">✅ 예약확인됨</div>
                  <div className="text-4xl font-bold text-green-600">
                    {reservations.filter(r => r.status === '예약확인').length}
                  </div>
                </div>
              </div>

              {/* 최근 예약 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-4">최근 예약 현황</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-bold text-stone-700">이름</th>
                        <th className="text-left py-3 px-4 font-bold text-stone-700">연락처</th>
                        <th className="text-left py-3 px-4 font-bold text-stone-700">예약일</th>
                        <th className="text-left py-3 px-4 font-bold text-stone-700">상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations.slice(-5).reverse().map(reservation => (
                        <tr key={reservation.id} className="border-b border-gray-200 hover:bg-yellow-50 transition">
                          <td className="py-3 px-4">{reservation.name}</td>
                          <td className="py-3 px-4">{reservation.phone}</td>
                          <td className="py-3 px-4">{reservation.date} {reservation.time}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              reservation.status === '예약확인' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reservation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* 메뉴 관리 탭 */}
        {activeTab === 'menu' && (
          <Reveal>
            <div className="space-y-6">
              {/* 메뉴 추가 폼 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">새 메뉴 추가</h2>
                <form onSubmit={handleAddMenu} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">메뉴명 *</label>
                    <input
                      type="text"
                      value={newMenu.name}
                      onChange={(e) => setNewMenu({...newMenu, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      placeholder="예: 크루아상"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">가격 *</label>
                    <input
                      type="number"
                      value={newMenu.price}
                      onChange={(e) => setNewMenu({...newMenu, price: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      placeholder="4500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">카테고리 *</label>
                    <select
                      value={newMenu.category}
                      onChange={(e) => setNewMenu({...newMenu, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    >
                      <option value="">선택하세요</option>
                      <option value="데니시">데니시</option>
                      <option value="소금빵">소금빵</option>
                      <option value="식빵">식빵</option>
                      <option value="롤케이크">롤케이크</option>
                      <option value="향신료빵">향신료빵</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">배지</label>
                    <select
                      value={newMenu.badge}
                      onChange={(e) => setNewMenu({...newMenu, badge: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    >
                      <option value="">선택하세요</option>
                      <option value="베스트셀러">베스트셀러</option>
                      <option value="신상">신상</option>
                      <option value="인기상품">인기상품</option>
                      <option value="프리미엄">프리미엄</option>
                      <option value="시즈널">시즈널</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-stone-700 mb-2">설명</label>
                    <textarea
                      value={newMenu.description}
                      onChange={(e) => setNewMenu({...newMenu, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      placeholder="메뉴 설명을 입력하세요"
                      rows="3"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-stone-700 mb-2">이미지 URL</label>
                    <input
                      type="text"
                      value={newMenu.image}
                      onChange={(e) => setNewMenu({...newMenu, image: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      placeholder="https://images.unsplash.com/..."
                    />
                    {newMenu.image && (
                      <div className="mt-3">
                        <img 
                          src={newMenu.image} 
                          alt="미리보기"
                          className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                        />
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-yellow-700 transition"
                  >
                    메뉴 추가
                  </button>
                </form>
              </div>

              {/* 메뉴 목록 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">메뉴 목록 ({menus.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menus.map(menu => (
                    <div key={menu.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                      {/* 이미지 */}
                      <div className="h-40 bg-gray-200 overflow-hidden">
                        <img 
                          src={menu.image} 
                          alt={menu.name}
                          className="w-full h-full object-cover"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/300x150?text=No+Image'}
                        />
                      </div>
                      
                      {/* 정보 */}
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-stone-800 text-lg">{menu.name}</h3>
                            <p className="text-yellow-600 font-bold text-lg">₩{menu.price.toLocaleString()}</p>
                          </div>
                          <button
                            onClick={() => deleteMenu(menu.id)}
                            className="text-red-500 hover:text-red-700 font-bold"
                          >
                            ✕
                          </button>
                        </div>
                        {menu.badge && (
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                            {menu.badge}
                          </span>
                        )}
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{menu.description}</p>
                        <p className="text-gray-500 text-xs">{menu.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* 예약 관리 탭 */}
        {activeTab === 'reservation' && (
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">예약 관리 ({reservations.length})</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-50">
                    <th className="text-left py-3 px-4 font-bold text-stone-700">이름</th>
                    <th className="text-left py-3 px-4 font-bold text-stone-700">연락처</th>
                    <th className="text-left py-3 px-4 font-bold text-stone-700">예약일</th>
                    <th className="text-left py-3 px-4 font-bold text-stone-700">시간</th>
                    <th className="text-left py-3 px-4 font-bold text-stone-700">상품</th>
                    <th className="text-left py-3 px-4 font-bold text-stone-700">상태</th>
                    <th className="text-center py-3 px-4 font-bold text-stone-700">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(reservation => (
                    <tr key={reservation.id} className="border-b border-gray-200 hover:bg-yellow-50 transition">
                      <td className="py-3 px-4 font-semibold text-stone-800">{reservation.name}</td>
                      <td className="py-3 px-4">{reservation.phone}</td>
                      <td className="py-3 px-4">{reservation.date}</td>
                      <td className="py-3 px-4">{reservation.time}</td>
                      <td className="py-3 px-4 text-gray-600 text-xs">{reservation.items}</td>
                      <td className="py-3 px-4">
                        <select
                          value={reservation.status}
                          onChange={(e) => updateReservationStatus(reservation.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-bold border-0 cursor-pointer ${
                            reservation.status === '예약확인'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          <option value="대기중">대기중</option>
                          <option value="예약확인">예약확인</option>
                          <option value="완료">완료</option>
                          <option value="취소">취소</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => deleteReservation(reservation.id)}
                          className="text-red-500 hover:text-red-700 font-bold hover:bg-red-100 px-2 py-1 rounded transition"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}

        {/* 페이지 관리 탭 */}
        {activeTab === 'pages' && (
          <Reveal>
            <div className="space-y-6">
              {/* 명장 이야기 편집 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">👨‍🍳 명장 이야기</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2">메인 제목</label>
                      <input
                        type="text"
                        defaultValue={pageInfo.masterStory.title}
                        onChange={(e) => updateMasterStory({ title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2">부제목</label>
                      <input
                        type="text"
                        defaultValue={pageInfo.masterStory.subtitle}
                        onChange={(e) => updateMasterStory({ subtitle: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">설명</label>
                    <textarea
                      defaultValue={pageInfo.masterStory.description}
                      onChange={(e) => updateMasterStory({ description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      rows="2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">상세 내용</label>
                    <textarea
                      defaultValue={pageInfo.masterStory.detail}
                      onChange={(e) => updateMasterStory({ detail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      rows="4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">명장 이야기 이미지 URL</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        defaultValue={pageInfo.masterStory.image}
                        onChange={(e) => updateMasterStory({ image: e.target.value })}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                    <img 
                      src={pageInfo.masterStory.image} 
                      alt="명장 이미지 미리보기"
                      className="mt-3 rounded-lg w-full max-h-40 object-cover border border-gray-200"
                    />
                  </div>
                </form>
              </div>

              {/* 홈페이지 히어로 이미지 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">🏠 홈페이지 히어로 이미지</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">이미지 URL</label>
                    <input
                      type="text"
                      defaultValue={pageInfo.homeHeroImage}
                      onChange={(e) => updateHomeHeroImage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      placeholder="https://images.unsplash.com/..."
                    />
                    <img 
                      src={pageInfo.homeHeroImage} 
                      alt="홈 히어로 이미지 미리보기"
                      className="mt-3 rounded-lg w-full max-h-40 object-cover border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* 베이킹 스케줄 편집 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">🕐 베이킹 일정</h2>
                <div className="space-y-4">
                  {pageInfo.bakingSchedule.map((schedule, idx) => (
                    <div key={idx} className="flex gap-4 items-end p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-stone-700 mb-1">시간</label>
                        <input
                          type="text"
                          defaultValue={schedule.time}
                          onChange={(e) => {
                            const updated = [...pageInfo.bakingSchedule];
                            updated[idx].time = e.target.value;
                            updateBakingSchedule(updated);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-stone-700 mb-1">항목</label>
                        <input
                          type="text"
                          defaultValue={schedule.item}
                          onChange={(e) => {
                            const updated = [...pageInfo.bakingSchedule];
                            updated[idx].item = e.target.value;
                            updateBakingSchedule(updated);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-stone-700 mb-1">아이콘</label>
                        <input
                          type="text"
                          defaultValue={schedule.icon}
                          onChange={(e) => {
                            const updated = [...pageInfo.bakingSchedule];
                            updated[idx].icon = e.target.value;
                            updateBakingSchedule(updated);
                          }}
                          maxLength="2"
                          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">📞 연락처 정보</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">전화번호</label>
                    <input
                      type="text"
                      defaultValue={pageInfo.contact.phone}
                      onChange={(e) => updateContact({ phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">주소</label>
                    <input
                      type="text"
                      defaultValue={pageInfo.contact.address}
                      onChange={(e) => updateContact({ address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">영업시간</label>
                    <input
                      type="text"
                      defaultValue={pageInfo.contact.hours}
                      onChange={(e) => updateContact({ hours: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">휴무일</label>
                    <input
                      type="text"
                      defaultValue={pageInfo.contact.closed}
                      onChange={(e) => updateContact({ closed: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                </div>
              </div>

              {/* 리뷰 관리 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-6">⭐ 고객 리뷰 ({pageInfo.reviews.length})</h2>
                
                {/* 새 리뷰 추가 폼 */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-stone-800 mb-4">새 리뷰 추가</h3>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.newReviewName.value;
                    const content = form.newReviewContent.value;
                    const rating = parseInt(form.newReviewRating.value);
                    
                    if (name && content && rating) {
                      addReview({ name, content, rating });
                      form.reset();
                    }
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        name="newReviewName"
                        placeholder="고객명"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      />
                      <select
                        name="newReviewRating"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ (5점)</option>
                        <option value="4">⭐⭐⭐⭐ (4점)</option>
                        <option value="3">⭐⭐⭐ (3점)</option>
                        <option value="2">⭐⭐ (2점)</option>
                        <option value="1">⭐ (1점)</option>
                      </select>
                      <button
                        type="submit"
                        className="bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition"
                      >
                        추가
                      </button>
                    </div>
                    <textarea
                      name="newReviewContent"
                      placeholder="리뷰 내용"
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                    />
                  </form>
                </div>

                {/* 기존 리뷰 목록 */}
                <div className="space-y-4">
                  {pageInfo.reviews.map(review => (
                    <div key={review.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-stone-800 text-lg">{review.name}</span>
                            <span className="text-yellow-500 text-lg">{'⭐'.repeat(review.rating)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteReview(review.id)}
                          className="text-red-500 hover:text-red-700 font-bold text-lg px-3"
                        >
                          ✕
                        </button>
                      </div>
                      
                      {/* 편집 가능한 리뷰 내용 */}
                      <div className="mb-3">
                        <textarea
                          defaultValue={review.content}
                          onChange={(e) => updateReview(review.id, { content: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                          rows="2"
                        />
                      </div>
                      
                      {/* 평점 편집 */}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600 font-semibold">평점:</span>
                        <select
                          value={review.rating}
                          onChange={(e) => updateReview(review.id, { rating: parseInt(e.target.value) })}
                          className="px-2 py-1 border border-gray-300 rounded text-yellow-700 font-bold focus:outline-none focus:border-yellow-600"
                        >
                          <option value="5">⭐⭐⭐⭐⭐ (5점)</option>
                          <option value="4">⭐⭐⭐⭐ (4점)</option>
                          <option value="3">⭐⭐⭐ (3점)</option>
                          <option value="2">⭐⭐ (2점)</option>
                          <option value="1">⭐ (1점)</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
