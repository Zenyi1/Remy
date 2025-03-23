'use client'

import styles from './image-picker.module.css';


import { useRef, useState } from 'react';
import Image from 'next/image';
export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handleImagePick() {
        imageInput.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file){
            setPickedImage(null);
            return;

        } 

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
    }

    return <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {!pickedImage && <p>No image picked.</p>}
                {pickedImage && (<Image src={pickedImage} alt={name}fill/>)}
            </div>
            <input className={styles.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput}  onChange={handleImageChange} required/>
            <button type="button" className={styles.button} onClick={handleImagePick}>Pick Image</button>
        </div>
    </div>
}