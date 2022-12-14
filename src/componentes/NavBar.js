import React from 'react';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import fotoPortada from '../assets/img/portada.jpg';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className= "contenedor-nav">
          <Link to={process.env.PUBLIC_URL + "/"}>
            <img className= "foto-portada" src={fotoPortada} alt="Foto de Portada" />
          </Link>
            <div className= "contenedor-lista">
                <NavLink to={process.env.PUBLIC_URL + "/"} className= "listas">Inicio</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/productos"} className= "listas">Productos</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/cart"} className= "listas">Carrito</NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/nosotros"} className= "listas">Sobre Nosotros</NavLink>
            </div>
            <Link to={process.env.PUBLIC_URL + "/cart"} className='contenedor-carrito'>
                <CartWidget className= "carrito"/>
            </Link>
        </nav>
  )
}

export default NavBar;