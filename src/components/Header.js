import React from 'react';
import "../assets/css/Header.css";
import { Link } from 'react-router-dom';
import LogoMenu from "../assets/logos/menu.svg";

export default function Header() {
  return (
    <>
      <div className='header'>
        <img src={LogoMenu} className="logo-menu" alt=''></img>
        <Link to='/' className='titulo'>Engrupir</Link>
        <ul className='header-menu'>
          <li className='header-option'>Acid Groove</li>
          <li className='header-option'>Vanguart</li>
          <li className='header-option'>On my feet</li>
          <li className='header-option'>Contacto</li>
        </ul>
      </div>
    </>
  )
}
