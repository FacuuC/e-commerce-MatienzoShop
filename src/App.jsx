import { useRouter } from './hooks/useRouter.jsx'

import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Route } from './components/Route.jsx'
import { mostrarListaNormalizada } from './cargaCelularesBD.js'

import { HomePage } from "./pages/Home.jsx"
import { SearchPage} from "./pages/Search.jsx"

import './App.css'
import { NotFoundPage } from './pages/404.jsx'

const routes = {
    '/':HomePage,
    '/search':SearchPage
}

export function App() {
    const { currentPath} = useRouter()
    const PageComponent = routes[currentPath] || NotFoundPage

	return (
        <>
            <Header />
            <PageComponent />
            <Footer />
        </>
    )
}