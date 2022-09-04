import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.info}>
            <div>Terms and conditions</div>
            <div>Privacy</div>
        </div>
        <div className={styles.social}>
            <div>Follow</div>
            <ul>
                <li><a href={'#'}><img src="icon_facebook.svg" alt="icon facebook"/></a></li>
                <li><a href={'#'}><img src="icon_twitter.svg" alt="icon twitter"/></a></li>
                <li><a href={'#'}><img src="icon_instagram.svg" alt="icon instagram"/></a></li>
            </ul>
        </div>
    </div>
}
export default Footer