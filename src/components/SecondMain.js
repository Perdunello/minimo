import styles from '../styles/SecondMain.module.scss'
import ImageSlider from "../common/ImageSlider";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getLifestyleData} from "../redux/commonReducer";
import Comments from "../common/Comments";

const SecondMain = () => {
    const articles = useSelector(state => state.common.lifestyleData)
    const dispatch = useDispatch()
    const [renderedArticles, setRenderedArticles] = useState(3)
    useEffect(() => {
        dispatch(getLifestyleData())
    }, [])
    return <div className={styles.main}>
        <ImageSlider/>
        <div className={styles.info}>
            <div className={styles.info__name}>PHOTODIARY</div>
            <h1 className={styles.info__title}>The perfect weekend getaway</h1>
            <div className={styles.info__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
                cumque
                dignissimos eaque eius
                et facilis fugit harum libero molestiae nam nesciunt, nisi nostrum numquam odio possimus quam quis quod
                rerum voluptates? Ab accusamus asperiores autem consequuntur cum dolores ducimus, ea expedita explicabo
                fuga fugit itaque, mollitia nihil porro praesentium provident quam sapiente sunt tenetur unde! Animi,
                facilis quod! Alias amet, animi asperiores at atque blanditiis commodi consequuntur delectus deleniti
                dignissimos eligendi et eveniet ex explicabo facere illum inventore iste itaque, laudantium libero magni
                maiores maxime molestiae nulla numquam odio officia omnis perspiciatis qui quisquam repellat rerum sequi
                similique tempore velit voluptatibus voluptatum. Accusamus architecto commodi corporis cupiditate
                debitis deleniti deserunt dicta dignissimos dolor earum enim eos error exercitationem facere fugit id
                iusto labore laboriosam molestias natus odit officiis pariatur possimus quam quos rem repudiandae sint
                soluta, vel voluptates. Magni molestiae nam pariatur quae quaerat quisquam reiciendis sequi tenetur
                voluptatibus?
            </div>
        </div>
        <div className={styles.photos}>
            <ul>
                <li><img className={styles.photo} src="slide_1.jpg" alt=""/></li>
                <li><img className={styles.photo} src="slide_2.jpg" alt=""/></li>
                <li><img className={styles.photo} src="slide_3.jpg" alt=""/></li>
            </ul>
        </div>
        <div className={styles.desc}>
            <div className={styles.italics}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur est sequi. Accusamus,
                aliquid animi, atque commodi consequuntur culpa dignissimos dolores eaque enim esse et exercitationem
                impedit iste laboriosam magnam magni maiores nihil non nulla numquam officia perspiciatis ratione
                recusandae
                rem repellendus repudiandae similique soluta suscipit tempora tempore totam, unde ut veniam voluptas
                voluptate voluptatem voluptatum. Beatae corporis ipsum iure laborum reiciendis? Beatae distinctio dolor
                explicabo, facilis, illo iusto non odit optio porro quidem quo, ut vel. Cumque, debitis dolorem ea est
                exercitationem harum odit qui rerum sint tenetur? Cumque!
            </div>
            <div className={styles.mainInfo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugiat
                inventore maiores molestias
                praesentium
                quis veniam, voluptates? A animi consequuntur, doloremque eum illo illum iure laborum necessitatibus
                porro
                quae quaerat quibusdam recusandae ut vero voluptate? Ad dignissimos eius eligendi necessitatibus numquam
                quidem? Accusamus aliquam, aperiam aspernatur cum dignissimos dolor et, exercitationem fuga incidunt
                inventore ipsum libero maiores minus placeat, quae quia quis sint sunt tempora temporibus velit veniam
                vero
                vitae. Adipisci dolores ex harum quaerat quidem rem sit suscipit voluptates! Aliquam, assumenda cumque
                debitis dicta eligendi, eum exercitationem explicabo fugiat ipsam magnam minus nihil nulla, officiis
                omnis
                quas rem sequi ullam voluptatem. Aliquid animi architecto autem delectus deleniti dignissimos doloribus
                ea,
                eligendi error esse eum fuga hic ipsum iusto minima molestias odio porro provident quis quos tempore ut
                vel
                veniam.
            </div>
        </div>
        <div className={styles.social}>
            <span>SHARE</span>
            <ul>
                <li><a href={'#'}><img className={styles.social__img} src="icon_facebook.svg" alt="icon facebook"/></a>
                </li>
                <li><a href={'#'}><img className={styles.social__img} src="icon_twitter.svg" alt="icon twitter"/></a>
                </li>
                <li><a href={'#'}><img className={styles.social__img} src="icon_instagram.svg"
                                       alt="icon instagram"/></a></li>
            </ul>
        </div>
        <div className={styles.articles}>
            <span>YOU MAY ALSO LIKE</span>
            {articles.slice(0, 3).map(item => {
                return <a href={'#'} key={item.id}>
                    <img src={item.photo} alt=""/>
                    <div className={styles.title}>{item.title}</div>
                </a>
            })}
        </div>
        <Comments/>
    </div>
}


export default SecondMain