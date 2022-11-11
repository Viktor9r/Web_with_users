import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={'https://static4.depositphotos.com/1007330/391/i/600/depositphotos_3919019-stock-photo-resort.jpg'}/>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem