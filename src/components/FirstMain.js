import styles from '../styles/FirstMain.module.scss'
import ImageSlider from "../common/ImageSlider";
import {useEffect, useState} from "react";
import {getLifestyleData} from "../redux/commonReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../common/Preloader";
import Login from "../common/Login";
import Lifestyle from "../common/Lifestyle";


const FirstMain = () => {
    const lifestyleData = useSelector(state => state.common.lifestyleData)
    const [renderedIndex, setRenderedIndex] = useState(6)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLifestyleData())
    }, [])
    const loadMore = () => {
        if (lifestyleData.length >= renderedIndex + 1) {
            setRenderedIndex(renderedIndex + 2)
        }
    }
    return <div className={styles.main}>
        <ImageSlider/>
        <div className={styles.photodiary}>
            <div className={styles.photodiary__name}>PHOTODIARY</div>
            <h1 className={styles.photodiary__title}>The Perfect weekend getaway</h1>
            <div className={styles.photodiary__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                adipisci aliquam aliquid cum deleniti dolorem, esse ex expedita harum ipsum magnam magni maiores
                officiis porro quo similique totam ut vitae. Adipisci architecto deleniti dignissimos distinctio
                dolore dolorem dolores, earum et laboriosam laborum minima nam nostrum numquam odio optio pariatur
                perferendis quisquam saepe sunt, vel? Ab accusantium adipisci aliquid asperiores blanditiis debitis
                dicta dolores eligendi eum, exercitationem iusto maiores modi, necessitatibus nesciunt pariatur quae
                quas quia reiciendis saepe sed sequi temporibus vero voluptate! Accusamus accusantium architecto,
                aut commodi corporis culpa cumque distinctio eos eveniet ipsam laboriosam magnam, minus mollitia
                nostrum, quam quia quos repellat sapiente veritatis voluptatibus. Aliquid animi, autem blanditiis
                consectetur consequuntur eligendi eos eum incidunt molestiae natus necessitatibus perspiciatis
                reprehenderit sequi similique voluptatum. Beatae delectus dolor eaque eum expedita fuga harum illo
                maxime nam nobis odit officia officiis perferendis praesentium, quasi quidem rerum saepe sit tempora
                temporibus vitae voluptate.
            </div>
            <div className={styles.photodiary__button}>LEAVE A COMMENT</div>
        </div>
        <div className={styles.lifestyle}>
            {lifestyleData.length
                ? <>
                    <Lifestyle lifestyleData={lifestyleData.slice(0, 4)}/>
                    <Login/>
                    <Lifestyle lifestyleData={lifestyleData.slice(4, renderedIndex)}/>
                </>
                : <>
                    <div className={styles.lifestyle__preloader}><Preloader/></div>
                    <Login/>
                </>
            }
        </div>
        <div className={styles.load}>
            <div className={styles.loadMore} onClick={loadMore}>LOAD MORE</div>
        </div>
    </div>
}

export default FirstMain