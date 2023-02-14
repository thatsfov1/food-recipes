import React from 'react'
import s from './Header.module.css'
import {AiFillGithub} from "react-icons/all";

const Header = () => {
  return (
    <div className={s.container}>
        <AiFillGithub/>
    </div>
  )
}

export default Header
