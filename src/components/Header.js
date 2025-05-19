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
      </div>
    </>
  )
}
