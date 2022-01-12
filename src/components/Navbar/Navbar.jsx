import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={ navData => navData.isActive ? s.active : '' }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : '' }>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
