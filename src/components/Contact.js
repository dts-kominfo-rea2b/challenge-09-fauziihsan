// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import style from "./contact.module.css";


const Contact = ({data}) => {
    const { name, email, phone, photo } = data;
    return (
        <div className={style.contact}>
            <div className={style.contact__avatar}>
                <img src={photo} alt={name} />
            </div>
            <div className={style.contact__info}>
                <p className={style.contact__info__txt}>
                    <b>{name}</b>
                </p>
                <div className={style.contact__infodesc}>
                    <p className={style.contact__infodesc__txt}>{phone}</p>
                    <p className={style.contact__infodesc__txt}>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;