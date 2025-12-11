import { Link } from "./Link.jsx"

export function Header() {
    return (
        <header id="menu-bar">
            <Link href="/">
                <h2>MatienzoShop</h2>
            </Link>

            <nav id="nav-bar">
                <Link href="/">Inicio</Link>
                <Link href="/search">Celulares</Link>
                <Link href="/sobre-nosotros">Sobre Nosotros</Link>
            </nav>
            <div id="sign-in">
                <Link href="/iniciar-sesion">Iniciar Sesion</Link>
            </div>
        </header>
    )
}