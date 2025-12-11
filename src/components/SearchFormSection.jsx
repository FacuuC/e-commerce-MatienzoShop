import { useId } from "react"

export function SearchFormSection({ onFiltersChange }) {
    const idText = useId()
    const idMarca = useId()
    const idCapacidad = useId()
    const idBateria = useId()

    const handleFormChange = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const filters = {
            search: formData.get(idText),
            marca: formData.get(idMarca),
            capacidad: formData.get(idCapacidad),
            bateria: formData.get(idBateria)
        }
        onFiltersChange(filters)
    }

    return (
        <section className="cels-search">
            <h1>Encuentra tu próximo iPhone</h1>
            <p>Explora entre gran variedad de oportunidades</p>

            <form onChange={handleFormChange} role="search" id="cels-search-form">
                <div className="search-bar">
                    <input
                        name={idText} type="text" id="cels-search-input"
                        placeholder="Busca celulares"
                    />
                </div>
                <div className="search-filters">
                    <select name={idMarca}>
                        <option value="">Marca</option>
                        <option value="iphone">iPhone</option>
                        <option value="samsung">Samsung</option>
                        <option value="xiaomi">Xiaomi</option>
                        <option value="motorola">Motorola</option>
                        <option value="huawei">Huawei</option>
                    </select>
                    <select name={idCapacidad} id="capacity-filter">
                        <option value="">Capacidad</option>
                        <option value="64">64 GB</option>
                        <option value="128">128 GB</option>
                        <option value="256">256 GB</option>
                        <option value="512">512 GB</option>
                    </select>
                    <select name={idBateria} id="batery-filter">
                        <option value="">Bateria</option>
                        <option value="100">100% (Nuevo)</option>
                        <option value="95">95% - 99%</option>
                        <option value="90">90% - 94%</option>
                        <option value="85">85% - 89%</option>
                        <option value="84">Menos de 84%</option>
                    </select>

                </div>
            </form>
        </section>
    )
}