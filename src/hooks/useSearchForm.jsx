import { useState } from "react"

export function useSearchForm ({idText, idMarca, idCapacidad, idBateria, onFiltersChange}) {
    const [searchText, setSearchText] = useState("")
    
    const handleFormChange = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const text = formData.get(idText)
        setSearchText(text)

        const filters = {
            search: text,
            marca: formData.get(idMarca),
            capacidad: formData.get(idCapacidad),
            bateria: formData.get(idBateria)
        }
        onFiltersChange(filters)
    }

    return {searchText,
        handleFormChange
        } 
}
