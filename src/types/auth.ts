import type { User } from "./user";

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  login: (payload: { user: User; token: string }) => void;
  logout: () => void;
};

export type { AuthState };
