import styles from '../styles/Header.module.scss'

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>
            MINIMO
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li>LIFESTYLE</li>
                <li>PHOTODIARY</li>
                <li>MUSIC</li>
                <li>TRAVEL</li>
            </ul>
        </nav>
    </header>
}

export default Header