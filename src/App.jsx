import { useRouter } from './hooks/useRouter.jsx'

import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Route } from './components/Route.jsx'

import { HomePage } from "./pages/Home.jsx"
import { SearchPage} from "./pages/Search.jsx"

import './App.css'

export function App() {
	return (
        <>
            <Header />
            <Route path='/' component={HomePage}/>
			<Route path='/search' component={SearchPage}/>
            <Footer />
        </>
    )
}