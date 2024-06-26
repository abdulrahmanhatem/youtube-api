
import { Link } from "react-router-dom";
import { SearchBar } from "..";
import logo from "../../assets/icons/logo-light.png";
import darkLogo from "../../assets/icons/logo.png"

export default function NavBar() {
    return (
        <nav className='navbar'>
            <Link to="/" className='logo'>
                <img src={logo}  alt="Youtube Logo" className="dark"/>
                <img src={darkLogo}  alt="Youtube Logo" className="light"/>
            </Link>
           <SearchBar/>
            <div className='side-menus'>
                <div className='profile'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128z"
                    />
                    <path
                        d="M0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                    />
                    </svg>

                </div>
            </div>
        </nav>
    )
}
