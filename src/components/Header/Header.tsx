import React from 'react'
import s from './Header.module.css'
import {AiFillGithub} from "react-icons/all";
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={s.container}>
        <a href='https://github.com/thatsfov1' target='_blank' className={s.git}>
            <AiFillGithub size='50px' color='#6a6a6a'/>
        </a>
        <NavLink to='/' className={s.logo}>
            <img src={logo}/>
        </NavLink>
    </div>
  )
}

export default Header
