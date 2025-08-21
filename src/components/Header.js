import { useEffect, useState } from "react";
import "./css/Header.css";
import { Link } from 'react-router-dom';
import LogoMenu from "../assets/logos/e-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen])

  return (
    <div className='header'>
      <img src={LogoMenu} className={`logo-menu ${menuOpen ? 'logo-open' : ''}`} alt='Menu' onClick={toggleMenu} />
      <Link to='/' className='header-logo'>engrupir</Link>
      <ul className={`header-menu-desplegable ${menuOpen ? 'open' : ''}`}>
        <li className='header-option'>Acid Groove</li>
        <li className='header-option'>Vanguart</li>
        <li className='header-option'>On my feet</li>
        <li className='header-option'>Contacto</li>
      </ul>
    </div>
  )
}
