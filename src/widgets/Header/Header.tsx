import { HeartIcon, LocationIcon, MessageIcon, ProfileIcon } from "@/shared/ui/icons"
import styles from './Header.module.scss'
import { Link } from "react-router-dom"
import LogoImg from '@/shared/ui/icons/LogoIcon/LogoIcon.svg'
function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerCity}>
                    <LocationIcon className={styles.locationIcon} />

                    <div className={styles.selectWrapper}>
                        <select id="cityMenu" className={styles.cityMenu} defaultValue="Москва">
                            <option value="Москва">Москва</option>
                            <option value="Санкт-Петербург">Санкт-Петербург</option>
                            <option value="Новосибирск">Новосибирск</option>
                        </select>

                        <span className={styles.chevron}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <nav className={styles.headerNav}>
                    <Link to='/favourites' className={styles.navButton}>
                        <HeartIcon />
                    </Link>
                    <Link to='/chat' className={styles.navButton}>
                        <MessageIcon />
                    </Link>
                    <Link to='/login' className={styles.navButton}>
                        <ProfileIcon />
                    </Link>
                </nav>
            </header>
            <header className={styles.headerBottom}>
                <div className={styles.headerBottomLogo}>
                    <Link to="/">
                        <img src={LogoImg} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.headerBottomLinks}>
                    <Link to='/about' className={styles.links}>О платформе</Link>
                    <Link to='/places' className={styles.links}>Площадкам</Link>
                    <Link to='/guests' className={styles.links}>Гостям</Link>
                </div>
                <div className={styles.headerBottomActions}>
                    <Link to='/add-request' className={styles.action}>+ Разместить запрос</Link>
                    <Link to='/add-place' className={styles.action}>+ Добавить место</Link>
                </div>
            </header>

        </>
    )
}
export default Header