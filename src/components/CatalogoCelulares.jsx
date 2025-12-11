import { IphoneCard } from "./IphoneCard"

export function CatalogoCelulares({ iphones }) {
    return (
            <section id="catalogo-section">
                <h2>Catálogo de Celulares</h2>
                <div id="catalogo-grid">
                    {iphones.map((producto) => (
                        <IphoneCard key={producto.id} productoIphone={producto}/>
                    ))}
                </div>
            </section>
    )
}


