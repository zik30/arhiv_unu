import { BASE_URL, tokens, user } from '../../consts';
import { $authApi } from '../../lib/requester';
import axios from 'axios';
import { create } from 'zustand';
import type { AuthState, LoginResponse, MeResponse } from './types';

export const useAuth = create<AuthState>((set, get) => ({
  // isAuth: !!localStorage.getItem(tokens.access),
  isAuth: true,
  isLoggingOut: false,
  isLoadingUser: false,
  email: null,

  setAuth: (isAuth: boolean) => {
    set({ isAuth });
    if (!isAuth) {
      localStorage.removeItem(tokens.access);
      localStorage.removeItem(tokens.refresh);
      set({ email: null });
    }
  },

  setEmail: (email: string | null) => set({ email }),

  login: async (response: { data: LoginResponse }) => {
    const { access_token, refresh_token } = response.data;
    localStorage.setItem(tokens.access, access_token);
    localStorage.setItem(tokens.refresh, refresh_token);
    set({ isAuth: true });

    try {
      await get().fetchUserData();
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  },

  logout: () => {
    const state = get();
    if (state.isLoggingOut) return;

    set({ isLoggingOut: true });
    localStorage.removeItem(tokens.access);
    localStorage.removeItem(tokens.refresh);
    sessionStorage.removeItem(user.email);
    set({ isAuth: false, email: null });

    setTimeout(() => set({ isLoggingOut: false }), 1000);
  },

  checkAuth: async (refreshToken: string): Promise<LoginResponse> => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${BASE_URL}/api/v1/auth/refresh`,
        {
          refresh_token: refreshToken,
        },
      );

      localStorage.setItem(tokens.access, data.access_token);
      set({ isAuth: true });

      try {
        await get().fetchUserData();
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  fetchUserData: async () => {
    try {
      set({ isLoadingUser: true });
      const response = await $authApi.get<MeResponse>('/auth/me');
      const userData = response.data;
      set({ email: userData.email });
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    } finally {
      set({ isLoadingUser: false });
    }
  },
}));
