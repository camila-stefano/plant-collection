const Li = ({ children }) => {
    return (
        <li className="cursor-pointer font-semibold text-primaryGreen tracking-wider hover:text-secondaryGreen transition ease-in-out delay-100 ">
            <a>{ children }</a>
        </li>
    )
}

export default Li