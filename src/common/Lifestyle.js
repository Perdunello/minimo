import styles from "../styles/FirstMain.module.scss";

const Lifestyle = ({lifestyleData}) => {
    return <>
        {lifestyleData.map(item => {
            return <section key={item.id}>
                <img width={'100%'} height={280} src={item.photo} alt=""/>
                <div className={styles.section__name}>LIFESTYLE</div>
                <h1 className={styles.section__title}>{item.title}</h1>
                <div className={styles.section__text}>{item.text}</div>
            </section>
        })}
    </>
}

export default Lifestyle