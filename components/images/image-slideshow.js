'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import styles from './image-slideshow.module.css';

const images = [
    { image: burgerImg,  alt: 'A burger'},
    { image: curryImg,  alt: 'A curry'},
    { image: dumplingsImg,  alt: 'Dumplings'},
    { image: macncheeseImg,  alt: 'Mac n Cheese'},
    { image: pizzaImg,  alt: 'A pizza'},
    { image: schnitzelImg,  alt: 'A schnitzel'},
    { image: tomatoSaladImg,  alt: 'A tomato salad'},
];

export default function ImageSlideshow() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) =>
             prevIndex < images.length - 1 ? prevIndex + 1 : 0);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.slideshow}>
            {images.map((image, index) => (
                <Image key={index} src={image.image} className={index ===currentImage ? styles.active : ' '} alt={image.alt} />
            ))}
        </div>
    );
}