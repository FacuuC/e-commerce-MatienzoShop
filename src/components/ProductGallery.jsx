import styles from "../components/ProductGallery.module.css"
import { useState } from "react"

export function ProductGallery({ images }) {
    const [activeImage, setActiveImage] = useState(images[0])

    function handleChangeImage(img){
        if (img === activeImage) return

        setActiveImage(img)
    }

    return (
        <section className={styles.productGallery}>
            {/* Imagen principal */}
            <figure className={styles.mainImage}>
                <img 
                src={activeImage.src}
                alt={activeImage.alt} 
                onClick={() => handleChangeImage(activeImage)}/>
            </figure>

            <nav 
                className={styles.thumbnailGallery} 
                aria-label="Miniaturas del producto">
                {images.map((img,index) => (
                    <button
                    key={index}
                    onClick={() => handleChangeImage(img)}
                    className={img === activeImage ? "active" : ""}
                    >
                        <img src={img.src} alt={img.alt} />
                    </button>
                ))}
                <span aria-hidden="true">+4</span>
            </nav>

            <ul className={styles.productFeatures}>
                <li>
                    <span className="icon-camera" aria-hidden="true"></span>
                    <strong>48MP</strong>
                    <span>Cámara Pro</span>
                </li>
                <li>
                    <span className="icon-video" aria-hidden="true"></span>
                    <strong>29h</strong>
                    <span>Video</span>
                </li>
                <li>
                    <span className="icon-chip" aria-hidden="true"></span>
                    <strong>A16</strong>
                    <span>Bionic</span>
                </li>
            </ul>
        </section>
    )
}