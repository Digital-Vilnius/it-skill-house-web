export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegistrationRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
}
