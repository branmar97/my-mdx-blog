import React, { useState } from 'react'
import { SliderData } from './sliderData';
import styles from '../styles/Portfolio.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ImageSlider = ({ project }) => {
    const slides = SliderData[project]
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div>
        <section className={styles.slider}>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? styles.active : styles.slide} onClick={nextSlide} key={index}>
                        {index === current && (
                            <img src={slide.image} alt={slide.alt} />
                        )}
                    </div>
                )
            })}
        </section>
        <div className={styles.arrows}>
            <AiOutlineArrowLeft className={styles.leftArrow} onClick={prevSlide} /> 
            <AiOutlineArrowRight className={styles.rightArrow} onClick={nextSlide} />
        </div>
        </div>
    )
}

export default ImageSlider;