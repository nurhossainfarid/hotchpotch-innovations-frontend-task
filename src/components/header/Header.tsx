import Navbar from "./Navbar";
import NavbarContent from "./NavbarContent";

const Header = ({ theme }) => {
  return (
    <div>
      <Navbar theme={theme} />
      <NavbarContent theme={theme} />
    </div>
  );
};

export default Header;
