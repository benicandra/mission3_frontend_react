import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
      loading: false,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),

  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useAuthStore;
