import { useParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"

import { Link } from "../components/Link"
import { ProductGallery } from "../components/ProductGallery"
import { ProductInfo } from "../components/ProductInfo"

import styles from "./Detail.module.css"

export function CelDetail() {
    const { celId } = useParams()

    const [cel, setCel] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const images = [
        { src: "../public/frontal-posterior.webp", alt: "Vista general" },
        { src: "../public/frontal.webp", alt: "Vista frontal" },
        { src: "../public/posterior-lateral.webp", alt: "Vista posterior" }
    ]

    useEffect(() => {
        fetch(`http://localhost:8080/celulares/${celId}`)
            .then(res => {
                if (!res.ok) throw new Error('Cel not found')
                return res.json()
            })
            .then(json => {
                setCel(json)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [celId])

    if (loading) {
        return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <div className={styles.loading}>
                <p className={styles.loadingText}>Cargando...</p>
            </div>
        </div>
    }

    if (error || !cel) {
        return <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <div className={styles.error}>
                <h2 className={styles.errorTitle}>
                    Producto no encontrado!
                </h2>
                <button
                    onClick={() => navigate('/')}
                    className={styles.errorButton}
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    }
    return (
        <div className={styles.container}>
            <main className={styles.celDetail}>

                <nav className={styles.breadcrumb}>
                    <div className={styles.breadcrumbContent}>
                        <Link
                            href="/"
                            className={styles.breadcrumbButton}>
                            Inicio
                        </Link>
                        <span
                            className={styles.breadcrumbSpan}
                        >{'>'}</span>
                        <Link
                            className={styles.breadcrumbButton}
                            href="/search">
                            Celulares
                        </Link>
                        <span
                            className={styles.breadcrumbSpan}
                        >{'>'}</span>
                        <span
                            className={styles.breadcrumbModel}
                        >{cel.modelo}</span>
                    </div>
                </nav>

                <article className={styles.productArticle}>

                    {/* Product Section */}
                    <ProductGallery images={images} />

                    {/* Información */}
                    <ProductInfo cel={cel} />
                </article>
                <section className="related-products">
                    <header className="section-header">
                        <h2>También te puede interesar</h2>
                        <div className="navigation-arrows">
                            <button aria-label="Anterior">←</button>
                            <button aria-label="Siguiente">→</button>
                        </div>
                    </header>

                    <div className="product-grid">
                        <article className="product-card">
                            <span className="badge">VISTO</span>
                            <figure>
                                <img src="" alt=""></img>
                            </figure>
                            <h3>iPhone 13 - Midnight</h3>
                            <p className="price">$699</p>
                            <button className="btn-view" aria-label="Ver producto">
                                <span className="icon-eye"></span>
                            </button>
                        </article>

                        <article className="product-card">
                            <figure>
                                <img src="" alt=""></img>
                            </figure>
                            <h3>iPhone 14 - Blue</h3>
                            <p className="price">$799</p>
                            <button className="btn-view" aria-label="Ver producto">
                                <span className="icon-eye"></span>
                            </button>
                        </article>

                        <article className="product-card">
                            <span className="badge discount">-10%</span>
                            <figure>
                                <img src="#" alt=""></img>
                            </figure>
                            <h3>Silicone Case MagSafe</h3>
                            <p className="price">$45</p>
                            <button className="btn-view" aria-label="Ver producto">
                                <span className="icon-eye"></span>
                            </button>
                        </article>

                        <article className="product-card">
                            <figure>
                                <img src="" alt=""></img>
                            </figure>
                            <h3>iPhone 13 Mini</h3>
                            <p className="price">$699</p>
                            <button className="btn-view" aria-label="Ver producto">
                                <span className="icon-eye"></span>
                            </button>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}