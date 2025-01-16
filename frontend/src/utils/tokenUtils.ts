import { TOKEN } from "./consts";

// utils/auth.ts
export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN); // Or sessionStorage if preferred
  };
  
  export const setToken = (token: string): void => {
    localStorage.setItem(TOKEN, token);
  };
  
  export const removeToken = (): void => {
    localStorage.removeItem(TOKEN);
  };
  