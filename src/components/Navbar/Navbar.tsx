import React from "react";
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = (props): React.ReactElement => {
    return <div className={s.container}>
        <div className={s.nav}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/category'>Categories</NavLink>
          <NavLink to='/'>Recipes</NavLink>
        </div>

    </div>;
}

export default Navbar;
