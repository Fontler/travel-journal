import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

export default function Navbar() {
    return (
        <header>
            <FontAwesomeIcon icon={faEarthEurope} 
            style={{color: "#ffffff", width: "25px", height: "25px"}} />
            <h1 className="logo-text">my travel journal</h1>
        </header>
    )
}