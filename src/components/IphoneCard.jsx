export function IphoneCard({ productoIphone }) {
    return (
        <article key={productoIphone.id} className="producto-card">
            <h3>{productoIphone.MODELO}</h3>
            <div className="producto-info">
                <p><strong>Capacidad:</strong> {productoIphone.CAPACIDAD} GB</p>
                <p><strong>Color:</strong> {productoIphone.COLOR}</p>
                <p><strong>Batería:</strong> {productoIphone.BATERÍA}%</p>
                <div className="detalle-precio">
                    <p className="precio"><strong>Precio:</strong> ${productoIphone.PRECIO}</p>
                    <button className="btn-comprar">Saber más</button>
                </div>
            </div>
            <p className={`detalles ${!productoIphone.DETALLES ? 'detalles-empty' : ''}`}>
                {productoIphone.DETALLES || '\u00A0'}
            </p>
        </article>
    )
}