import { Header } from '@/widgets/Header';
import { LoginForm } from '@/features/auth/ui/LoginForm';
import styles from '@/features/auth/ui/RegisterForm.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.formSide}>
        <LoginForm />
      </div>

      <div className={styles.imageSide}>
        {/* Тут будет картинка с бизнесменом */}
        <h2>Тут будет картинка</h2>
      </div>
    </div>
  );
};