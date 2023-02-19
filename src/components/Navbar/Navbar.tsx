import React from "react";
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = (props): React.ReactElement => {
    return <div className={s.container}>
        <div className={s.nav}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/categories'>Categories</NavLink>
          <NavLink to='/recipes'>Recipes</NavLink>
          <NavLink to='/library'>My library</NavLink>
        </div>

    </div>;
}

export default Navbar;
