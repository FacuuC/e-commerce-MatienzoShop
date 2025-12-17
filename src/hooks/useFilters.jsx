import { useEffect, useState } from "react"
import { useRouter } from "./useRouter"

const RESULTS_PER_PAGE = 12

export function useFilters (){
    const [filters, setFilters] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        // Leer batería: puede venir como minBateria o maxBateria
        const minBateria = params.get('minBateria')
        const maxBateria = params.get('maxBateria')
        const bateria = minBateria || maxBateria || ''
        
        return {
            search: params.get('search') || '',
            marca: params.get('marca') || '',
            capacidad: params.get('almacenamiento') || '',
            bateria: Number(bateria)
        }
    })

    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        const page = Number(params.get('page'))
        if (Number.isNaN(page) || Number(page) <= 0){
            return 1
        } 
        console.log(Number(page))
        return Number(page)
    })

    const [cels, setCels] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [totalResultados, setTotalResultados] = useState(1)
    const { navigateTo } = useRouter()

    const pageBackend = currentPage -1

    useEffect(() => {
        async function fetchCels (){
            try {
                const params = new URLSearchParams()
                if (filters.search) params.append('search', filters.search)
                if (filters.marca) params.append('marca', filters.marca)
                if (filters.capacidad) params.append('almacenamiento', filters.capacidad)
                if (filters.bateria){
                    if (filters.bateria <= 84) {params.append('maxBateria', filters.bateria)}
                    else { params.append('minBateria', filters.bateria)
                        if (filters.bateria === 100){ params.append('maxBateria', filters.bateria)}
                        else { params.append('maxBateria', (filters.bateria + 4))}
                    }
                }
                params.append('size', RESULTS_PER_PAGE)
                params.append('page', pageBackend)

                const queryParams = params.toString()                

                setLoading(true)
                const url = `http://localhost:8080/celulares?${queryParams}`
                console.log(url)
                const response = await fetch(url)
                const data = await response.json()

                if (data.content){
                    setCels(data.content)
                    setTotalPages(data.totalPages)
                    setTotalResultados(data.totalElements)
                }else {
                    setCels([])
                }
            } catch (error) {
                console.error('Error fetching celulares: ',error)
            } finally {
                setLoading(false)
            }
        }

        fetchCels()
    }, [filters, currentPage])

    useEffect(() => {
        const params = new URLSearchParams()

        if(filters.search) params.append('search', filters.search)
        if(filters.marca) params.append('marca', filters.marca)
        if(filters.capacidad) params.append('almacenamiento', filters.capacidad)
            if (filters.bateria){
                if (filters.bateria <= 84) {params.append('maxBateria', filters.bateria)}
                else { params.append('minBateria', filters.bateria)
                    if (filters.bateria === 100){ params.append('maxBateria', filters.bateria)}
                    else { params.append('maxBateria', (filters.bateria + 4))}
                }}

        if(currentPage > 1) params.append('page', currentPage)

        const newUrl = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname

        navigateTo(newUrl)
            }, [filters, currentPage, navigateTo])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (newFilters) => {
        setFilters(newFilters)
        setCurrentPage(1)
    }

    return {
        handlePageChange,
        handleFiltersChange,
        filters,
        cels,
        loading,
        currentPage,
        totalPages,
        totalResultados
    }
}