import plantLogo from '../assets/logo.png'
import Li from './Li'

const NavBar = () => {
    return ( 
        <nav className="flex bo justify-between px-8 py-4 shadow-md">
            <img className='max-w-16' src={plantLogo} alt="Plant logo" />
            <ul className='inline-flex space-x-8 items-center'>
                <Li link="#">Outdoor Plants</Li>
                <Li link="#">Indoor Plants</Li>
                <Li link="#">My collection</Li>
            </ul>
        </nav>
    )
}

export default NavBar