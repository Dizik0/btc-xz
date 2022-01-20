import style from './Navigation.module.scss'
import logo from '../../img/logo.png'

const Navigation = () => {
  return (
    <header className={style.header}>
      <a href="/" className={style.logoLink}>
        <img src={logo} alt="logo" className={style.logoImg} />
      </a>
      <ul className={style.navigation}>
        <li className={style.navigationItem}>HOME</li>
        <li className={style.navigationItem}>ABOUT US</li>
        <li className={style.navigationItem}>FAQS</li>
        <li className={style.navigationItem}>TERMS</li>
      </ul>
      <button className={style.button}>SIGN UP</button>
    </header>
  )
}

export default Navigation
