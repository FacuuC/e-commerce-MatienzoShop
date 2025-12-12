import { useEffect, useState } from "react"
import { useFilters } from "../hooks/useFilters.jsx"

import { CatalogoCelulares } from "../components/CatalogoCelulares.jsx"
import { Pagination } from "../components/Pagination.jsx"

import '../App.css'
import { SearchFormSection } from "../components/SearchFormSection.jsx"

export function SearchPage() {
    const {
        handleFiltersChange,
        handlePageChange,
        celsFilteredByFilters,
        pagedResults,
        currentPage,
        totalPages,
    } = useFilters()

    return (
        <main>
            <SearchFormSection onFiltersChange={handleFiltersChange} />
            
            <section>
                <CatalogoCelulares iphones={pagedResults} />

                {celsFilteredByFilters.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </section>
        </main>
    )
}