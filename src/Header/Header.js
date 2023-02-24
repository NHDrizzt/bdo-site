import './Header.css'
import profilePicture from './blackdesert-logos350.png'

function Header() {
    return (
        <header className="header-container">
            <div className="container-content">
                <nav>
                    <ul>
                        <p>Alquimia</p>
                        <p>Culinaria</p>
                        <p>Processamento</p>
                        <p>Nodes</p>
                    </ul>
                </nav>
                <img className="image-wrapper" src={profilePicture} alt='some'/>
                <div className="title">
                    <h1>Calculadora de Lifeskills - Inicio</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;