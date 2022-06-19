// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import style from "./header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>Call a Friend</h1>
            <p className={style.header__subtitle}>your friendly contact app </p>
        </header>
    )
}

export default Header;