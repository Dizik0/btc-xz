import style from './BuildPortfolio.module.scss'
import photo from '../../img/pc.jpg'
const BuildPortfolio = () => {
  return (
    <div className={style.BuildPortfolio}>
      <div>
        <h3 className={style.title}>Build your crypto portfolio</h3>
        <p className={style.secondTitle}>
          <a href="/" className={style.link}>
            Btc-xz.online
          </a>{' '}
          is a full-featured investment platform for major digital assets &{' '}
          <br />
          cryptocurrencies, including Bitcoin, Ethereum, Bitcoin Cash, Litecoin
          and <br /> Dashcoin.
          <br />
          <a href="/" className={style.link}>
            Btc-xz.online
          </a>{' '}
          offers leveraged margin trading through a peer-to-peer funding <br />{' '}
          market, allowing users to securely trade with up to 3.3x leverage.{' '}
          <br /> We belive that everyone should have an unmetered access to
          explore the <br />
          wonderful world of crypto with all of its benefits.
        </p>
        <button className={style.button}>SIGN UP</button>
      </div>
      <div className={style.boxPhoto}>
        <img src={photo} alt="" className={style.img} />
      </div>
    </div>
  )
}

export default BuildPortfolio
