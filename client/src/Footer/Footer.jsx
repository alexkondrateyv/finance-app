import React from "react";
import style from './Footer.module.css';

const Footer = () => {
    return(
        <div className={style.footer}>
            <p>Created by <a href={'https://telegram.me/saintseraph'}>Oleksandr Kondratiev</a></p>
        </div>
    )
}

export default Footer;