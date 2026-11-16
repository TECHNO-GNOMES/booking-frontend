import { RegisterForm } from '@/features/auth/ui/RegisterForm';
import { Header } from '@/widgets/Header';
import styles from '@/features/auth/ui/RegisterForm.module.scss'

const RegistrationPage = () => {

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <div className={styles.fromSide}>

        <RegisterForm/>
      </div>
      <div className={styles.imageSide}>

        {/* ... Картинка с певцом ... */}
      </div>
    </div>
  );
};

export default RegistrationPage