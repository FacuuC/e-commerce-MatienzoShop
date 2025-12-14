import { useState } from "react"

let timeoutId = null

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
            capacidad: formData.get(idCapacidad) === "" ? formData.get(idCapacidad) : parseInt(formData.get(idCapacidad)),
            bateria: formData.get(idBateria) === "" ? formData.get(idBateria) : parseInt(formData.get(idBateria))
        }

        if (timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            onFiltersChange(filters)
        }, 500)
        
    }

    return {searchText,
        handleFormChange
        } 
}
