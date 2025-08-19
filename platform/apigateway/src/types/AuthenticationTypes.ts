export type AuthenticationResponse = {
  success: boolean;
  message: string;
  data?: {
    name: string;
    username: string;
    email: string;
  };
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  error?: {
    code: string;
    message: string;
    details?: string;
    field?: string;
    status?: number;
  };
  timestamp?: string;
  requestId?: string;
};
