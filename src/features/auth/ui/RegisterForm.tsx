import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../model/useRegister';
import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading, debugCode } = useRegister();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password || password.length < 7) {
      alert("Заполните поля (пароль > 7 символов)");
      return;
    }
    register(email, password);

  };

  if (debugCode) {
    return (
      <div className={styles.formContainer}>
        <h1 className={styles.title}>ПОЧТИ ГОТОВО!</h1>
        <p className={styles.subtitle}>
          Вам на почту отправлено письмо. Пожалуйста, перейдите по ссылке...
        </p>
        <div className={styles.debugBox}>
          <strong>Тестовый режим:</strong> код <span className={styles.debugCode}>{debugCode}</span>
        </div>
        
        <div className={styles.buttonsRow}>
           <Link 
              to={`/verify-email?email=${email}&code=${debugCode}`} 
              className={styles.btnPrimary}
           >
              Перейти к вводу кода
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>РЕГИСТРАЦИЯ</h1>
      <p className={styles.subtitle}>Чтобы создать аккаунт, заполните поля ниже.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className={styles.input}
          />
          <span className={styles.icon}>✉️</span>
        </div>

        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Пароль" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className={styles.input}
          />
          <span className={styles.icon}>🔑</span>
        </div>

        <div className={styles.buttonsRow}>
          <button type="submit" disabled={loading} className={styles.btnPrimary}>
            {loading ? 'Загрузка...' : 'Зарегистрироваться'}
          </button>
        </div>
      </form>
    </div>
  );
};