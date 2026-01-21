import styles from "../components/ProductInfo.module.css"

export function ProductInfo({ cel }) {
    return (
        <section className={styles.productInfo}>
            <header className={styles.productHeader}>
                <div className={styles.productRating}>
                    <p className={styles.brand}>Apple</p>
                    <p className={styles.rating}>⭐ 4.9 (124 reviews)</p>
                </div>
                <h1>{cel.modelo}</h1>
                <p className={styles.description}>
                    Dynamic Island, una forma mágica de interactuar con tu iPhone. Camara de 48MP para un nivel de detalle asombroso. Y todo en un diseño resistente.
                </p>
            </header>
            <p className="price">
                <strong>${cel.precio}</strong>
            </p>

            <form className="product-options">

                <fieldset>
                    <legend>Color: {cel.color}</legend>
                    <div className="color-options">
                        <label>
                            <input type="radio" name="color" />
                            <span className="color-circle"></span>
                        </label>
                        <label>
                            <input type="radio" name="color" />
                            <span className="color-circle"></span>
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Almacenamiento</legend>
                    <div className="storage-options">
                        <label>
                            <input type="radio" name="storage" />
                            <span>128GB</span>
                        </label>
                        <label>
                            <input type="radio" name="storage" />
                            <span>256GB</span>
                        </label>
                        <label>
                            <input type="radio" name="storage" />
                            <span>512GB</span>
                        </label>
                    </div>
                </fieldset>

                <div className="quantity">
                    <button type="button">-</button>
                    <input type="number" min="1" defaultValue="1" />
                    <button type="button">+</button>

                    <div className="shipping-info">
                        <p>Envío gratis</p>
                        <p>Llega mañana</p>
                    </div>
                </div>

                <button type="submit" className="btn-add-to-cart">
                    🛒 Añadir al carrito
                </button>

                <button type="button" className="btn-share" aria-label="Compartir producto">
                    🔗
                </button>

            </form>

            <footer className="product-extra">
                <p>Garantía oficial de 12 meses incluida</p>
            </footer>
        </section>
    )
}