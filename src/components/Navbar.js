import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <ul className='nav-menu'>
            <li><NavLink to='/dados' activeClassName='is-active' exact={true}>Dados</NavLink></li>
            <li><NavLink to='/origem-nome' activeClassName='is-active' exact={true}>Origem do Nome</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;