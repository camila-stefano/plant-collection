import './NavBar.css'
import plantLogo from '../assets/logo.png'

const NavBar = () => {
    return ( 
        <nav className="bg-primaryGreen flex sm:justify-center space-x-4">
            <img className='logo' src={plantLogo} alt="Plant logo" />
            <ul>
                <li className='fontSize:xl'>
                    Outdoor plants
                </li>
                <li>
                    Indoor Plants
                </li>
                <li>
                    My collection
                </li>
            </ul>
        </nav>
    )
}

export default NavBar