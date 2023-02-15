import React from 'react'
import s from './Header.module.css'
import {AiFillGithub} from "react-icons/all";
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={s.container}>
        <a href='https://github.com/thatsfov1' target='_blank' className={s.git}>
            <AiFillGithub size='50px' color='#6a6a6a'/>
        </a>
        <div className={s.logo}>
            <img src={logo}/>
        </div>
    </div>
  )
}

export default Header
