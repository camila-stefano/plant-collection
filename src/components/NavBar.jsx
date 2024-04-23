import plantLogo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto py-5 flex justify-between">
      <Link to="/"><img className="max-w-44 max-h-10" src={plantLogo} alt="Plant logo" /></Link>
      <ul className="inline-flex space-x-8 items-center">
        <Link to="explore">Explore</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
