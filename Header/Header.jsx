import React, { useContext }from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider'
import LogOsito from '../../images/osito.png';



export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    };

    return(
        <header>
            <Link to='/'>
              <div className='logo'>
                <img src={LogOsito} alt='logo' width='150' />
              </div>
              </Link>
            
           <ul>
            <li>
                <Link className='nav-link'  to='/productos'>Productos</Link>
            </li>
            <li>
                <Link className='nav-link' to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
            </li>
            <li>
                <Link className='nav-link' to='/contacto'>Contacto</Link>
            </li>
            <li>
                <Link className='nav-link' to='/como-comprar'>Como comprar</Link>
            </li>
           </ul>
            <div className='cart' onClick={toogleMenu}>
             <box-icon name='cart'></box-icon>
             <span className='item__total'>{carrito.length}</span>
           </div>
        </header>
    );
}