import React from 'react';
import '../styles/components/Header.scss'
import logoURL from '../assets/images/chemicals-logo.svg'
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='Header' style={{justifyContent: 'center'}}>
      <figure>
        <img src={logoURL} alt="Corporación Chemicals Logo" />
      </figure>
      <nav>
        <ul>
          {/* <Link to="/">Inicio</Link> */}
          {/* <Link to="/pedidos">Pedidos</Link> */}
          {/* <li><a className='coming-soon' href="#">Productos</a></li> */}
        </ul>
      </nav>
  </header>
);
 
export default Header;