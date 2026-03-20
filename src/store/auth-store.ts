import type { AuthState } from "@/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      token: null,
      login: ({ user, token }) => set({ isLoggedIn: true, user, token }),
      logout: () => set({ isLoggedIn: false, user: null, token: null }),
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
