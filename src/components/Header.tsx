import signature from "../assets/signature-black.webp";
import "./Header.css";

const RESUME =
  "https://standardresume.co/r/morgan-p-stanley";

const GITHUB =
  "https://github.com/morganpstanley"

type headerProps = {
  handleToggle(event: React.MouseEvent<HTMLButtonElement>): any;
  toggleMenu(): void;
  mobile: boolean;
  about: boolean;
  portfolio: boolean;
  contact: boolean;
};

const Header = ({
  handleToggle,
  toggleMenu,
  mobile,
  about,
  portfolio,
  contact,
}: headerProps) => {
  return (
    <div id="header">
      <img
        src={signature}
        id="signature"
        width="100"
        height="100"
        className={mobile ? "inverted" : ""}
        alt="Morgan Stanley"
      />
      <button
        id="hamburger-icon"
        className={mobile ? "showClose" : ""}
        aria-label="mobile menu"
        onClick={toggleMenu}
      ></button>
      <nav className={`navbar ${mobile ? "showNav" : ""}`}>
        {/* <button
          id="about"
          className={`link font-playfair ${about ? "active" : ""}`}
          onClick={handleToggle}
        >
          About
        </button> */}
        {/* <button
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
