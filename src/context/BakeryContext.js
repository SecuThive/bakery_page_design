import React, { createContext, useState, useEffect } from 'react';

export const BakeryContext = createContext();

export function BakeryProvider({ children }) {
  // 기본 메뉴 데이터
  const initialMenus = [
    { id: 1, name: '크루아상', price: 4500, badge: '베스트셀러', category: '데니시', description: '버터의 풍미가 살아있는 프랑스식 크루아상', image: 'https://images.unsplash.com/photo-1585314317897-fea231b40fef?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: '소금빵', price: 3500, badge: '프리미엄', category: '소금빵', description: '제주 해염을 사용한 고소한 소금빵', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd41225?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: '식빵', price: 5500, badge: '인기상품', category: '식빵', description: '매일 아침 구워내는 부드러운 식빵', image: 'https://images.unsplash.com/photo-1599599810959-c7f7c6d1c9a9?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: '초코 크로아상', price: 5000, badge: '신상', category: '데니시', description: '벨기에 초콜릿을 채운 프리미엄 크로아상', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400' },
    { id: 5, name: '마늘빵', price: 3000, badge: '인기상품', category: '향신료빵', description: '신선한 마늘과 버터의 조화', image: 'https://images.unsplash.com/photo-1599599810986-faeb519d9b1f?auto=format&fit=crop&q=80&w=400' },
    { id: 6, name: '단호박 크림 롤', price: 6000, badge: '시즈널', category: '롤케이크', description: '가을 시즌의 특별한 단호박 풍미', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400' }
  ];

  const initialReservations = [
    { id: 1, name: '김철수', phone: '010-1234-5678', date: '2026-01-20', time: '10:00', items: '크루아상 5개', status: '예약확인' },
    { id: 2, name: '이영희', phone: '010-2345-6789', date: '2026-01-21', time: '14:00', items: '식빵 1개, 소금빵 3개', status: '대기중' },
  ];

  // 페이지 정보 (수정 가능한 콘텐츠)
  const initialPageInfo = {
    masterStory: {
      title: '40년의 정성',
      subtitle: '대한민국 제과명장으로서 40여 년을 한길로 걸어온 마스터.',
      description: '프랑스의 정통 기법을 배우고, 한국의 감성을 담아낸 명장의 손길에서 탄생한 빵들은 더 이상 단순한 음식이 아닙니다.',
      detail: '매일 아침 새벽 3시, 화덕에서 시작되는 일상. 72시간의 정성과 건강한 재료의 조화로 완성된 빵 한 덩이는 누군가의 하루를 밝히는 따뜻한 위로가 됩니다.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
    },
    bakingSchedule: [
      { time: '09:00', item: '식빵 & 건강 베이커리', icon: '🍞' },
      { time: '11:30', item: '프랑스 크로와상', icon: '🥐' },
      { time: '14:00', item: '프리미엄 발효빵', icon: '🥖' }
    ],
    homeHeroImage: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=800',
    contact: {
      phone: '032-1234-5678',
      address: '인천광역시 남동구 예술로 123',
      hours: '09:00 - 21:00',
      closed: '매주 월요일 휴무'
    },
    reviews: [
      { id: 1, name: '김미영', content: '진짜 맛있어요! 매번 이 가게 빵을 먹으면 다른 빵은 못 먹겠어요.', rating: 5 },
      { id: 2, name: '박준호', content: '품질이 정말 좋고 신선합니다. 추천합니다!', rating: 5 },
      { id: 3, name: '이지은', content: '가격이 좀 비싸지만 그만한 가치가 있어요.', rating: 4 }
    ]
  };

  // 상태 관리
  const [menus, setMenus] = useState(() => {
    const saved = localStorage.getItem('bakery_menus');
    return saved ? JSON.parse(saved) : initialMenus;
  });

  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('bakery_reservations');
    return saved ? JSON.parse(saved) : initialReservations;
  });

  const [pageInfo, setPageInfo] = useState(() => {
    const saved = localStorage.getItem('bakery_pageInfo');
    return saved ? JSON.parse(saved) : initialPageInfo;
  });

  const [adminAuth, setAdminAuth] = useState(() => {
    const saved = localStorage.getItem('admin_auth');
    return saved ? JSON.parse(saved) : { isLoggedIn: false, loginTime: null };
  });

  // localStorage에 저장
  useEffect(() => {
    localStorage.setItem('bakery_menus', JSON.stringify(menus));
  }, [menus]);

  useEffect(() => {
    localStorage.setItem('bakery_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('bakery_pageInfo', JSON.stringify(pageInfo));
  }, [pageInfo]);

  useEffect(() => {
    localStorage.setItem('admin_auth', JSON.stringify(adminAuth));
  }, [adminAuth]);

  // 메뉴 관리 함수
  const addMenu = (newMenu) => {
    const menu = {
      ...newMenu,
      id: Math.max(...menus.map(m => m.id), 0) + 1
    };
    setMenus([...menus, menu]);
    return menu;
  };

  const updateMenu = (id, updatedMenu) => {
    setMenus(menus.map(m => m.id === id ? { ...updatedMenu, id } : m));
  };

  const deleteMenu = (id) => {
    setMenus(menus.filter(m => m.id !== id));
  };

  // 예약 관리 함수
  const addReservation = (newReservation) => {
    const reservation = {
      ...newReservation,
      id: Math.max(...reservations.map(r => r.id), 0) + 1,
      status: '대기중'
    };
    setReservations([...reservations, reservation]);
    return reservation;
  };

  const updateReservationStatus = (id, status) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteReservation = (id) => {
    setReservations(reservations.filter(r => r.id !== id));
  };

  // 페이지 정보 관리 함수
  const updateMasterStory = (updated) => {
    setPageInfo(prev => ({
      ...prev,
      masterStory: { ...prev.masterStory, ...updated }
    }));
  };

  const updateHomeHeroImage = (imageUrl) => {
    setPageInfo(prev => ({
      ...prev,
      homeHeroImage: imageUrl
    }));
  };

  const updateBakingSchedule = (schedule) => {
    setPageInfo(prev => ({
      ...prev,
      bakingSchedule: schedule
    }));
  };

  const updateContact = (contact) => {
    setPageInfo(prev => ({
      ...prev,
      contact: { ...prev.contact, ...contact }
    }));
  };

  const addReview = (review) => {
    setPageInfo(prev => ({
      ...prev,
      reviews: [...prev.reviews, { ...review, id: Math.max(...prev.reviews.map(r => r.id), 0) + 1 }]
    }));
  };

  const deleteReview = (id) => {
    setPageInfo(prev => ({
      ...prev,
      reviews: prev.reviews.filter(r => r.id !== id)
    }));
  };

  const updateReview = (id, updated) => {
    setPageInfo(prev => ({
      ...prev,
      reviews: prev.reviews.map(r => r.id === id ? { ...r, ...updated } : r)
    }));
  };

  // 관리자 인증
  const loginAdmin = (password) => {
    if (password === 'admin2026') {
      setAdminAuth({ isLoggedIn: true, loginTime: new Date().toISOString() });
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setAdminAuth({ isLoggedIn: false, loginTime: null });
  };

  const value = {
    // 메뉴
    menus,
    addMenu,
    updateMenu,
    deleteMenu,
    // 예약
    reservations,
    addReservation,
    updateReservationStatus,
    deleteReservation,
    // 페이지 정보
    pageInfo,
    updateMasterStory,
    updateHomeHeroImage,
    updateBakingSchedule,
    updateContact,
    addReview,
    deleteReview,
    updateReview,
    // 인증
    adminAuth,
    loginAdmin,
    logoutAdmin,
  };

  return <BakeryContext.Provider value={value}>{children}</BakeryContext.Provider>;
}

// 커스텀 훅
export function useBakery() {
  const context = React.useContext(BakeryContext);
  if (!context) {
    throw new Error('useBakery must be used within BakeryProvider');
  }
  return context;
}
