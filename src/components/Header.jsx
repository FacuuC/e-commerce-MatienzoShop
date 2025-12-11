export function Header() {
    return (
        <header id="menu-bar">
            <a href="/">
                <h2>MatienzoShop</h2>
            </a>

            <nav id="nav-bar">
                <a href="/">Inicio</a>
                <a href="/search">Celulares</a>
                <a href="/sobre-nosotros">Sobre Nosotros</a>
            </nav>
            <div id="sign-in">
                <a href="/iniciar-sesion">Iniciar Sesion</a>
            </div>
        </header>
    )
}