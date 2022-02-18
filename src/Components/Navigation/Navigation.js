import style from './Navigation.module.scss'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <header className={style.header}>
      <a href="/" className={style.logoank}>
        <img src={logo} alt="logo" className={style.logoImg} />
      </a>
      <div className={style.navigation}>
        <NavLink to="/" className={style.navigationItem}>
          HOME
        </NavLink>
        <NavLink to="/about" className={style.navigationItem}>
          ABOUT US
        </NavLink>
        <NavLink to="/faqs" className={style.navigationItem}>
          FAQS
        </NavLink>
        <NavLink to="/terms" className={style.navigationItem}>
          TERMS
        </NavLink>
      </div>
      <button className={style.button}>SIGN UP</button>
    </header>
  )
}

export default Navigation
