export interface MeResponse {
  email: string;
  id: number;
  role: string;
  credits: number;
  created_at: string;
  is_email_verified: boolean;
  preferences_id: number;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface UserData {
  id: number;
  email: string;
  role: string;
  credits: number;
  is_email_verified: boolean;
  created_at: string;
  preferences_id: null | number;
}

export interface AuthState {
  isAuth: boolean;
  isLoggingOut: boolean;
  isLoadingUser: boolean;
  email: string | null;

  setAuth: (isAuth: boolean) => void;
  login: (response: { data: LoginResponse }) => void;
  logout: () => void;
  checkAuth: (refreshToken: string) => Promise<LoginResponse>;
  setEmail: (email: string) => void;
  fetchUserData: () => Promise<void>;
}
