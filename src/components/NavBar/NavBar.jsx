import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {
    let state = props.store.getState().sidebar;

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile/0" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink>
            </div>
            <div className={s.friends}>
                Friend
            </div>
            <div>
                <Friends state={state.sidebar}/>
            </div>
        </nav>

    )
        ;
}
export default (NavBar);

