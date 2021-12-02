import signature from '../assets/signature-black.webp'
const RESUME = "https://docs.google.com/document/d/e/2PACX-1vRz0REkDGRXf_f5P_VgXC_jD8hGxeFZWm10WVxKCrY_C0qh7iZbQhim0cIslSFvV3mfAzqrGdsq2ZET/pub"

const Header = ({handleToggle, toggleMenu, mobile, about, portfolio, contact}) => {
  return(
    <div id="header">
      <img src={signature} id="signature" width="100" height="100" className={mobile ? "inverted" : ''} alt="Morgan Stanley"/>
      <button id="hamburger-icon" className={mobile ? "showClose" : ''} aria-label="mobile menu" onClick={toggleMenu}></button>
      <nav className={`navbar ${mobile ? "showNav" : null}`}>
        <button id="about" className={`link font-playfair ${about ? 'active' : ''}`} onClick={handleToggle}>About</button>
        <button id="portfolio"className={`link font-playfair ${portfolio ? 'active' : ''}`} onClick={handleToggle}>Portfolio</button>
        <button id="contact" className={`link font-playfair ${contact ? 'active' : ''}`} onClick={handleToggle}>Contact</button>
        <a className="link font-playfair" href="https://medium.com/@morganpstanley">Blog⤤</a>
        <a className="link font-playfair" href={RESUME} target="_blank" rel="noopener noreferrer">Resume⤤</a>
      </nav>
    </div>
  )
}

export default Header