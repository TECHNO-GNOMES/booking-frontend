import { useState } from 'react';
import { authApi } from '@/entities/User/api/authApi';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authApi.login(email, password);
      
      localStorage.setItem('access_token', data.access_token);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};