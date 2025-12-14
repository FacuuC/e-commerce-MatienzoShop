import { useEffect, useState } from "react"

const RESULTS_PER_PAGE = 12

export function useFilters (){
    const [filters, setFilters] = useState({
        search: '',
        marca: '',
        capacidad: '',
        bateria: ''
    })

    const [currentPage, setCurrentPage] = useState(1)
    const [cels, setCels] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [totalResultados, setTotalResultados] = useState(1)

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
        cels,
        loading,
        currentPage,
        totalPages,
        totalResultados
    }
}