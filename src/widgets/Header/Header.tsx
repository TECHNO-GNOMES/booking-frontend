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
                    <Link path='/favourites' className={styles.navButton}>
                        <HeartIcon />
                    </Link>
                    <Link path='/chat' className={styles.navButton}>
                        <MessageIcon />
                    </Link>
                    <Link path='/profile' className={styles.navButton}>
                        <ProfileIcon />
                    </Link>
                </nav>
            </header>
            <header className={styles.headerBottom}>
                <div className={styles.headerBottomLogo}>
                    <img src={LogoImg} alt="Logo" />
                </div>
                <div className={styles.headerBottomLinks}>
                    <Link path='/about' className={styles.links}>О платформе</Link>
                    <Link path='/places' className={styles.links}>Площадкам</Link>
                    <Link path='/guests' className={styles.links}>Гостям</Link>
                </div>
                <div className={styles.headerBottomActions}>
                    <Link path='/add-request' className={styles.action}>+ Разместить запрос</Link>
                    <Link path='/add-place' className={styles.action}>+ Добавить место</Link>
                </div>
            </header>

        </>
    )
}
export default Header