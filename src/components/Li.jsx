const Li = ({ children }) => {
    return (
        <li className="cursor-pointer font-semibold text-primaryGreen tracking-wider">
            <a>{ children }</a>
        </li>
    )
}

export default Li