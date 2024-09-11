import muslimvote from "../../assets/muslimvote.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="container">
      <img src={muslimvote} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="whatwedo" smooth={true} offset={-200} duration={500}>
            What we do
          </Link>
        </li>
        <li>
          <Link to="InteractiveMap" smooth={true} offset={-260} duration={500}>
            Interactive Map
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="goal" smooth={true} offset={-260} duration={500}>
            Our Goal
          </Link>
        </li>
        <li>
          <Link to="reports" smooth={true} offset={-260} duration={500}>
            Reports
          </Link>
        </li>
        <li>
          <Link to="faq" smooth={true} offset={-260} duration={500}>
            FAQs
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
