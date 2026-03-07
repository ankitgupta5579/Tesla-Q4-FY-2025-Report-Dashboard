import { create } from 'zustand';

interface DashboardState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  timePeriod: '1Y' | '3Y' | '5Y' | 'All';
  setTimePeriod: (period: '1Y' | '3Y' | '5Y' | 'All') => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeSection: 'overview',
  setActiveSection: (section) => set({ activeSection: section }),
  timePeriod: '5Y',
  setTimePeriod: (period) => set({ timePeriod: period }),
}));
