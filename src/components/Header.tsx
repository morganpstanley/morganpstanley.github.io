import signature from "../assets/signature-black.webp";
import HamburgerMenu from "react-hamburger-menu"
import "./Header.css";

const RESUME =
  "https://standardresume.co/r/morgan-p-stanley";

const GITHUB =
  "https://github.com/morganpstanley"

type headerProps = {
  handleToggle(event: React.MouseEvent<HTMLButtonElement>): any;
  toggleMenu(): void;
  menu: boolean;
  about: boolean;
  portfolio: boolean;
  contact: boolean;
};

const Header = ({
  handleToggle,
  toggleMenu,
  menu,
  about,
  portfolio,
  contact,
}: headerProps) => {

  const HamburgerMenuOptions = {
    isOpen: menu,
    menuClicked() {
      toggleMenu();
    },
    width: 50,
    height: 30,
    strokeWidth: 5,
    color: menu ? "white" : "black",
    className: "hamburger",
}

  return (
    <div id="header">
      <img
        src={signature}
        id="signature"
        width="100"
        height="100"
        className={menu ? "inverted" : ""}
        alt="Morgan Stanley"
      />
      <HamburgerMenu
        {...HamburgerMenuOptions}
      />
      <nav className={`navbar ${menu ? "showNav" : ""}`}>
        <button
          id="about"
          className={`link font-playfair ${about ? "active" : ""}`}
          onClick={handleToggle}
        >
          About
        </button>
        <button
          id="portfolio"
          className={`link font-playfair ${portfolio ? "active" : ""}`}
          onClick={handleToggle}
        >
          Portfolio
        </button> */}
        {/* <button
          id="contact"
          className={`link font-playfair ${contact ? "active" : ""}`}
          onClick={handleToggle}
        >
          Contact
        </button>
        <a
          className="link font-playfair"
          href="https://medium.com/@morganpstanley"
        >
          Blog⤤
        </a> */}
         <a
          className="link font-playfair"
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github⤤
        </a>
        <a
          className="link font-playfair"
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume⤤
        </a>
      </nav>
    </div>
  );
};

export default Header;
