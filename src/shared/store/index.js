import { create } from 'zustand';

// UI 관련 상태 (메뉴, 모달, 테마 등)
const useUIStore = create((set) => ({
  isMenuOpen: false,
  theme: 'light',
  setIsMenuOpen: (status) => set({ isMenuOpen: status }),
  setTheme: (theme) => set({ theme }),
}));

// 전역 상태 (스크롤, 섹션, 기타 공통 데이터)
const useGlobalStore = create((set) => ({
  currentSection: 0,
  isLoading: false,
  setCurrentSection: (section) => set({ currentSection: section }),
  setIsLoading: (status) => set({ isLoading: status }),
}));


export { useUIStore, useGlobalStore };