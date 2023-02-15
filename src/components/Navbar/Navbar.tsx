import React from "react";
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = (props): React.ReactElement => {
    return <div className='p-25'>
        <div className='flex align-'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/category'>Categories</NavLink>
          <NavLink to='/'>Recipes</NavLink>
        </div>

    </div>;
}

export default Navbar;
