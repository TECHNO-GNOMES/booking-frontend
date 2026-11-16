import type { AuthResponse } from '../model/types';

const API_URL = 'https://....'; 

export const authApi = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Ошибка авторизации');
    return res.json();
  },

  async register(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Ошибка регистрации');
    return res.json();
  },

  async verify(email: string, code: string): Promise<{ success: boolean }> {
    const res = await fetch(`${API_URL}/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    });
    return res.json();
  }
};