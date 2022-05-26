import React from "react";
import style from './Header.module.css';
import logo from './logo.png'

const Header = () => {
    return(
        <div className={style.header}>
            <img src={logo} alt={'logo'} className={style.logo}/>
        </div>
    )
}

export default Header;