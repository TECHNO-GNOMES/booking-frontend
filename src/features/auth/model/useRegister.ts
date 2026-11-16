import { useState } from 'react';
import { authApi } from '@/entities/User/api/authApi';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [debugCode, setDebugCode] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const register = async (userEmail: string, password: string) => {
    setLoading(true);
    try {
      const data = await authApi.register(userEmail, password);
      
      if (data.debug_verification_code) {
        setDebugCode(data.debug_verification_code);
      }
      
      setEmail(userEmail);

    } catch (err) {
      alert('Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, debugCode, email };
};