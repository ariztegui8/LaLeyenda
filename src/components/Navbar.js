import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from '../assets/ariztegui 1.png';
import Swal from 'sweetalert2'
import "animate.css"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleBtn = ()=>{
    Swal.fire({
      title: 'Telefono de contacto: 2494533092',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="fondo-ariz">
          

          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to='/' className=''>
              <img className="logo-ariz" src={logo} />
            </Link>
            
          </div>
          <h1 className="text-white title_ariztegui">LEYENDA DE JINETEADAS</h1>
          <button
            className="btn btn-outline-light btn-contrataciones"
            onClick={handleBtn}
            >Contrataciones</button>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>

              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>

                );
              })}
            </ul>
          </nav>

        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
