import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div   className={s.logotype}>
            <img src='https://www.gblogodesign.co.uk/wp-content/uploads/2021/05/Twitter.png'/>
            </div>
                <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink className={s.avlink} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header;

