import { Routes, Route } from 'react-router'

import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"

import { HomePage } from "./pages/Home.jsx"
import { SearchPage} from "./pages/Search.jsx"
import { NotFoundPage } from './pages/404.jsx'
import { CelDetail } from './pages/Detail.jsx'

import './App.css'

export function App() {
	return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path="/celulares/:celId" element={<CelDetail />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}