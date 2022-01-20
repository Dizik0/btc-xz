import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.linkBox}>
        <a href="/" className={style.link}>
          BUY BITCOIN
        </a>
        <a href="/" className={style.link}>
          GET A BITCOIN WALLET
        </a>
      </div>
      <p className={style.titleFirst}>
        <b> CONTACT US:</b> Address: 61B Lindgren Esplanade West Marcia, KAS
        2419 <b>Email:</b> support@btc-xz.org
      </p>
      <p className={style.title}>
        © 2018-2021{' '}
        <a href="/" className={style.linkBtc}>
          BTC-XZ LTD
        </a>{' '}
        Trademarks belong to their respective owners. All rights reserved
      </p>
    </div>
  )
}

export default Footer
