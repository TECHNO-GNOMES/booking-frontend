import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '@/entities/User/api/authApi';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Заполните все поля');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await authApi.login(email, password);
      localStorage.setItem('access_token', data.access_token);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Ошибка входа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>АВТОРИЗАЦИЯ</h1>
      <p className={styles.subtitle}>Чтобы войти в свой аккаунт, заполните поля ниже.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <div style={{ color: '#ff4d4f', textAlign: 'center', fontSize: '14px' }}>{error}</div>}

        {/* Инпут Email/Телефон */}
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="Почтовый адрес или номер телефона"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
          />
          <span className={styles.icon}>👤</span>
        </div>

        {/* Инпут Пароля */}
        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
          />
          <span className={styles.icon}>🔑</span>
          <span className={styles.eyeIcon}>👁️</span>
        </div>

        {/* Чекбокс и Забыли пароль */}
        <div className={styles.checkboxRow}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            Запомнить меня
          </label>
          <a href="#" className={styles.link}>Забыли свой пароль?</a>
        </div>

        {/* Текст соглашения (как на макете) */}
        <p className={styles.agreementText}>
          Входя в аккаунт или создавая новый, вы соглашаетесь с нашими <a href="#">Правилами и условиями</a> и <a href="#">Положением о конфиденциальности</a>.
        </p>

        {/* Кнопки */}
        <div className={styles.buttonsRow}>
          <button type="submit" disabled={loading} className={styles.btnPrimary}>
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
          
          <Link to="/registration" className={styles.btnSecondary}>
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
};