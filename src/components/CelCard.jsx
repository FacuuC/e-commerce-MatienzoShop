export function CelCard({ productoCel }) {
    return (
        <article key={productoCel.id} className="producto-card">
            <h3>{productoCel.modelo}</h3>
            <div className="producto-info">
                <p><strong>Capacidad:</strong> {productoCel.almacenamiento} GB</p>
                <p><strong>Color:</strong> {productoCel.color}</p>
                <p><strong>Batería:</strong> {productoCel.bateria}%</p>
                <div className="detalle-precio">
                    <p className="precio"><strong>Precio:</strong> ${productoCel.precio}</p>
                    <button className="btn-comprar">Saber más</button>
                </div>
            </div>
            {productoCel.descripcion && (
                <p className="detalles">{productoCel.descripcion}</p>
            )}
        </article>
    )
}