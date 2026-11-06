import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import styles from './MainLayout.module.scss'

function MainLayout() {
    return (
        <>
            <Header />
            <main className={styles.layout}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default MainLayout