import plantLogo from "../assets/logo2.png";
import Li from "./Li";

const NavBar = () => {
  return (
    <nav className="container mx-auto py-4 px-4 flex justify-between">
      <img className="max-w-44 max-h-10" src={plantLogo} alt="Plant logo" />
      <ul className="inline-flex space-x-8 items-center">
        <Li link="#">Explore</Li>
      </ul>
    </nav>
  );
};

export default NavBar;
