import { Button } from '@/shared/ui/Button'
import styles from './NotFoundPage.module.scss'
import { Header } from '@/widgets/Header'
import { Link, useNavigate } from "react-router-dom"

export function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className={styles.contentWrapper}>
                <div className={styles.notFoundPageContent}>
                    <div className={styles.notFoundPageText}>
                        <h1>ОЙ! ТАКОЙ СТРАНИЦЫ <br/> НЕ НАЙДЕНО</h1>
                        <span>
                            Пока мы будем ее искать, вы можете <br /> вернуться на 
                            <Link to="/" className="link"> главную </Link>
                            и поискать идеальную <br /> площадку для вашего мероприятия:)
                        </span>
                        <Button variant='primary' size='default' onClick={() => navigate('/')}>На главную</Button>
                    </div>
                    <div className={styles.notFoundPageImage}>
                        <img src="" alt="404 - page not found" />
                    </div>
                </div>
            </div>
        </>
    )
}