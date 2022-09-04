import styles from '../styles/ImageSlider.module.scss'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotosSlider} from "../redux/commonReducer";
import Preloader from "./Preloader";

const ImageSlider = () => {
    const photos = useSelector(state => state.common.photosSlider)
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        dispatch(getPhotosSlider())//get slider`s photos
    }, [])
    setTimeout(() => switchSlide('right'), 10000)

    const switchSlide = (side) => {
        if (photos) {
            side === 'right' ?
                currentIndex + 1 <= photos.length - 1
                    ? setCurrentIndex(currentIndex + 1)
                    : setCurrentIndex(0)
                : currentIndex - 1 >= 0
                    ? setCurrentIndex(currentIndex - 1)
                    : setCurrentIndex(photos.length - 1)
        }

    }
    if (!photos) {
        return <Preloader/>
    }
    return <div className={styles.main}>
        <div className={styles.slider}>
            <div>
                <img className={styles.slide} src={photos[currentIndex].url} alt=""/>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button} onClick={() => switchSlide('left')}>
                </div>
                <div className={styles.button} onClick={() => switchSlide('right')}>
                </div>
            </div>
        </div>
    </div>
}

export default ImageSlider